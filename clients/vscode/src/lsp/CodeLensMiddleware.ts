import {
  window,
  Range,
  CodeLens as VscodeCodeLens,
  TextEditor,
  TextEditorDecorationType,
  TextDocument,
  CancellationToken,
  ThemeColor,
  DecorationRangeBehavior,
} from "vscode";
import { CodeLensMiddleware as VscodeLspCodeLensMiddleware, ProvideCodeLensesSignature } from "vscode-languageclient";
import { CodeLens as TabbyCodeLens } from "tabby-agent";
import { findTextEditor } from "./vscodeWindowUtils";
import { isBrowser } from "../env";

type CodeLens = VscodeCodeLens & TabbyCodeLens;

const decorationTypeHeader = window.createTextEditorDecorationType({
  backgroundColor: new ThemeColor("merge.incomingHeaderBackground"),
  isWholeLine: true,
  rangeBehavior: DecorationRangeBehavior.ClosedClosed,
});
const decorationTypeFooter = window.createTextEditorDecorationType({
  backgroundColor: new ThemeColor("merge.incomingHeaderBackground"),
  isWholeLine: true,
  rangeBehavior: DecorationRangeBehavior.ClosedClosed,
});
const decorationTypeComments = window.createTextEditorDecorationType({
  color: new ThemeColor("editorInlayHint.foreground"),
  backgroundColor: new ThemeColor("editorInlayHint.background"),
  fontStyle: "italic",
  fontWeight: "normal",
  isWholeLine: true,
  rangeBehavior: DecorationRangeBehavior.ClosedOpen,
});
const decorationTypeUnchanged = window.createTextEditorDecorationType({});
const decorationTypePending = window.createTextEditorDecorationType({
  backgroundColor: new ThemeColor("editor.inactiveSelectionBackground"),
  isWholeLine: true,
  rangeBehavior: DecorationRangeBehavior.ClosedClosed,
});
const decorationTypeInserted = window.createTextEditorDecorationType({
  backgroundColor: new ThemeColor("diffEditor.insertedTextBackground"),
  isWholeLine: true,
  rangeBehavior: DecorationRangeBehavior.ClosedClosed,
});
const decorationTypeDeleted = window.createTextEditorDecorationType({
  backgroundColor: new ThemeColor("diffEditor.removedTextBackground"),
  isWholeLine: true,
  rangeBehavior: DecorationRangeBehavior.ClosedClosed,
});
const decorationTypes: Record<string, TextEditorDecorationType> = {
  header: decorationTypeHeader,
  footer: decorationTypeFooter,
  commentsFirstLine: decorationTypeComments,
  comments: decorationTypeComments,
  waiting: decorationTypePending,
  inProgress: decorationTypeInserted,
  unchanged: decorationTypeUnchanged,
  inserted: decorationTypeInserted,
  deleted: decorationTypeDeleted,
};

export class CodeLensMiddleware implements VscodeLspCodeLensMiddleware {
  private readonly decorationMap = new Map<TextEditor, Map<TextEditorDecorationType, Range[]>>();

  async provideCodeLenses(
    document: TextDocument,
    token: CancellationToken,
    next: ProvideCodeLensesSignature,
  ): Promise<CodeLens[] | undefined | null> {
    const codeLenses = await next(document, token);
    const editor = findTextEditor(document.uri);
    if (!editor) {
      return codeLenses;
    }

    this.removeDecorations(editor);
    
    const result =
    codeLenses
      ?.map((codeLens) => this.handleCodeLens(codeLens, editor))
      .filter((codeLens): codeLens is CodeLens => codeLens !== null) ?? [];
    this.purgeDecorationMap();
    return result;
  }

  private handleCodeLens(codeLens: CodeLens, editor: TextEditor): CodeLens | null {
    this.addShortcut(codeLens);
    if (!codeLens.data || codeLens.data.type !== "previewChanges") {
      return codeLens;
    }
    const decorationRange = new Range(
      codeLens.range.start.line,
      codeLens.range.start.character,
      codeLens.range.end.line,
      codeLens.range.end.character,
    );
    const lineType = codeLens.data.line;
    if (typeof lineType === "string" && lineType in decorationTypes) {
      const decorationType = decorationTypes[lineType];
      if (decorationType) {
        this.addDecorationRange(editor, decorationType, decorationRange);
      }
    }
    if (codeLens.data.line === "header") {
      return codeLens;
    }
    return null;
  }

  private addShortcut(codeLens: CodeLens) {
    if (codeLens.command?.arguments?.[0].action === "accept") {
      // FIXME: Read ~/.config/Code/User/keybindings.json from LSP client, then send to LSP server to avoid hardcode.
      const acceptShortcut = isBrowser ? '' : ` (${process.platform === 'darwin' ? '⌘+enter' : 'Ctrl+enter'})`;

      codeLens.command.title += acceptShortcut;
    } else if (codeLens.command?.arguments?.[0].action === "discard") {
      const discardShortcut = isBrowser ? "" : ` (esc)`;

      codeLens.command.title += discardShortcut;
    }
  }

  private addDecorationRange(editor: TextEditor, decorationType: TextEditorDecorationType, range: Range) {
    let decorations: Map<TextEditorDecorationType, Range[]> | undefined;
    if (this.decorationMap.has(editor)) {
      decorations = this.decorationMap.get(editor);
    }
    if (!decorations) {
      decorations = new Map();
      this.decorationMap.set(editor, decorations);
    }
    let ranges: Range[] | undefined;
    if (decorations.has(decorationType)) {
      ranges = decorations.get(decorationType);
    }
    if (!ranges) {
      ranges = [];
      decorations.set(decorationType, ranges);
    }
    ranges.push(range);
    editor.setDecorations(decorationType, ranges);
  }

  private removeDecorations(editor: TextEditor) {
    if (this.decorationMap.has(editor)) {
      const decorations = this.decorationMap.get(editor);
      decorations?.forEach((_, decorationType) => {
        editor.setDecorations(decorationType, []);
      });
      this.decorationMap.delete(editor);
    }
  }

  private purgeDecorationMap() {
    const editorsToRemove = [...this.decorationMap.keys()].filter(
      (editor) => !window.visibleTextEditors.includes(editor),
    );
    editorsToRemove.forEach((editor) => this.decorationMap.delete(editor));
  }
}
