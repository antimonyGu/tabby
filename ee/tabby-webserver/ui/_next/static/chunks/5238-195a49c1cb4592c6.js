(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5238],{45238:function(e,r){var t,n;void 0!==(n="function"==typeof(t=e=>{"use strict";var r,t,n,s,o=(e,r="<b>",t="</b>")=>{for(var n="function"==typeof r?r:void 0,s=e.target,o=s.length,a=e.indexes,i="",f=0,l=0,c=!1,_=[],v=0;v<o;++v){var g=s[v];if(a[l]===v){if(++l,c||(c=!0,n?(_.push(i),i=""):i+=r),l===a.length){n?(i+=g,_.push(n(i,f++)),i="",_.push(s.substr(v+1))):i+=g+t+s.substr(v+1);break}}else c&&(c=!1,n?(_.push(n(i,f++)),i=""):i+=t);i+=g}return n?_:i},a=e=>{"number"==typeof e?e=""+e:"string"!=typeof e&&(e="");var r=x(e);return l(e,{_targetLower:r._lower,_targetLowerCodes:r.lowerCodes,_bitflags:r.bitflags})};class i{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((e,r)=>e-r)}set indexes(e){return this._indexes=e}highlight(e,r){return o(this,e,r)}get score(){return c(this._score)}set score(e){this._score=_(e)}}class f extends Array{get score(){return c(this._score)}set score(e){this._score=_(e)}}var l=(e,r)=>{let t=new i;return t.target=e,t.obj=r.obj??T,t._score=r._score??F,t._indexes=r._indexes??[],t._targetLower=r._targetLower??"",t._targetLowerCodes=r._targetLowerCodes??T,t._nextBeginningIndexes=r._nextBeginningIndexes??T,t._bitflags=r._bitflags??0,t},c=e=>e===F?0:e>1?e:Math.E**-(((-e+1)**.04307-1)*2),_=e=>0===e?F:e>1?e:1-Math.pow(-(Math.log(e)/2)+1,1/.04307),v=e=>{"number"==typeof e?e=""+e:"string"!=typeof e&&(e="");var r=x(e=e.trim()),t=[];if(r.containsSpace){var n=e.split(/\s+/);n=[...new Set(n)];for(var s=0;s<n.length;s++)if(""!==n[s]){var o=x(n[s]);t.push({lowerCodes:o.lowerCodes,_lower:n[s].toLowerCase(),containsSpace:!1})}}return{lowerCodes:r.lowerCodes,_lower:r._lower,containsSpace:r.containsSpace,bitflags:r.bitflags,spaceSearches:t}},g=e=>{if(e.length>999)return a(e);var r=k.get(e);return void 0!==r||(r=a(e),k.set(e,r)),r},u=e=>{if(e.length>999)return v(e);var r=y.get(e);return void 0!==r||(r=v(e),y.set(e,r)),r},h=(e,r)=>{var t=[];t.total=e.length;var n=r?.limit||E;if(r?.key)for(var s=0;s<e.length;s++){var o=e[s],a=A(o,r.key);if(a!=T){M(a)||(a=g(a));var i=l(a.target,{_score:a._score,obj:o});if(t.push(i),t.length>=n)break}}else if(r?.keys)for(var s=0;s<e.length;s++){for(var o=e[s],c=new f(r.keys.length),_=r.keys.length-1;_>=0;--_){var a=A(o,r.keys[_]);if(!a){c[_]=O;continue}M(a)||(a=g(a)),a._score=F,a._indexes.len=0,c[_]=a}if(c.obj=o,c._score=F,t.push(c),t.length>=n)break}else for(var s=0;s<e.length;s++){var a=e[s];if(a!=T&&(M(a)||(a=g(a)),a._score=F,a._indexes.len=0,t.push(a),t.length>=n))break}return t},d=(e,r,t=!1,n=!1)=>{if(!1===t&&e.containsSpace)return p(e,r,n);for(var s=e._lower,o=e.lowerCodes,a=o[0],f=r._targetLowerCodes,l=o.length,c=f.length,_=0,v=0,g=0;;){var u=a===f[v];if(u){if(C[g++]=v,++_===l)break;a=o[_]}if(++v>=c)return T}var _=0,h=!1,d=0,x=r._nextBeginningIndexes;x===T&&(x=r._nextBeginningIndexes=w(r.target));var b=0;if((v=0===C[0]?0:x[C[0]-1])!==c)for(;;)if(v>=c){if(_<=0||++b>200)break;--_,v=x[S[--d]]}else{var u=o[_]===f[v];if(u){if(S[d++]=v,++_===l){h=!0;break}++v}else v=x[v]}var k=l<=1?-1:r._targetLower.indexOf(s,C[0]),y=!!~k,L=!!y&&(0===k||r._nextBeginningIndexes[k-1]===k);if(y&&!L){for(var B=0;B<x.length;B=x[B])if(!(B<=k)){for(var I=0;I<l&&o[I]===r._targetLowerCodes[B+I];I++);if(I===l){k=B,L=!0;break}}}var j=e=>{for(var r=0,t=0,n=1;n<l;++n)e[n]-e[n-1]!=1&&(r-=e[n],++t);if(r-=(12+(e[l-1]-e[0]-(l-1)))*t,0!==e[0]&&(r-=e[0]*e[0]*.2),h){for(var s=1,n=x[0];n<c;n=x[n])++s;s>24&&(r*=(s-24)*10)}else r*=1e3;return r-=(c-l)/2,y&&(r/=1+l*l*1),L&&(r/=1+l*l*1),r-=(c-l)/2};if(h){if(L){for(var B=0;B<l;++B)C[B]=k+B;var m=C,A=j(C)}else var m=S,A=j(S)}else{if(y)for(var B=0;B<l;++B)C[B]=k+B;var m=C,A=j(m)}r._score=A;for(var B=0;B<l;++B)r._indexes[B]=m[B];r._indexes.len=l;let M=new i;return M.target=r.target,M._score=r._score,M._indexes=r._indexes,M},p=(e,r,t)=>{for(var n=new Set,s=0,o=T,a=0,i=e.spaceSearches,f=i.length,l=0,c=()=>{for(let e=l-1;e>=0;e--)r._nextBeginningIndexes[L[2*e+0]]=L[2*e+1]},_=!1,v=0;v<f;++v){if(I[v]=F,o=d(i[v],r),t){if(o===T)continue;_=!0}else if(o===T)return c(),T;if(v!==f-1){var g=o._indexes,u=!0;for(let e=0;e<g.len-1;e++)if(g[e+1]-g[e]!=1){u=!1;break}if(u){var h=g[g.len-1]+1,p=r._nextBeginningIndexes[h-1];for(let e=h-1;e>=0&&p===r._nextBeginningIndexes[e];e--)r._nextBeginningIndexes[e]=h,L[2*l+0]=e,L[2*l+1]=p,l++}}s+=o._score/f,I[v]=o._score/f,o._indexes[0]<a&&(s-=(a-o._indexes[0])*2),a=o._indexes[0];for(var x=0;x<o._indexes.len;++x)n.add(o._indexes[x])}if(t&&!_)return T;c();var b=d(e,r,!0);if(b!==T&&b._score>s){if(t)for(var v=0;v<f;++v)I[v]=b._score/f;return b}t&&(o=r),o._score=s;var v=0;for(let e of n)o._indexes[v++]=e;return o._indexes.len=v,o},x=e=>{for(var r=e.length,t=e.toLowerCase(),n=[],s=0,o=!1,a=0;a<r;++a){var i=n[a]=t.charCodeAt(a);if(32===i){o=!0;continue}s|=1<<(i>=97&&i<=122?i-97:i>=48&&i<=57?26:i<=127?30:31)}return{lowerCodes:n,bitflags:s,containsSpace:o,_lower:t}},b=e=>{for(var r=e.length,t=[],n=0,s=!1,o=!1,a=0;a<r;++a){var i=e.charCodeAt(a),f=i>=65&&i<=90,l=f||i>=97&&i<=122||i>=48&&i<=57,c=f&&!s||!o||!l;s=f,o=l,c&&(t[n++]=a)}return t},w=e=>{for(var r=e.length,t=b(e),n=[],s=t[0],o=0,a=0;a<r;++a)s>a?n[a]=s:(s=t[++o],n[a]=void 0===s?r:s);return n},k=new Map,y=new Map,C=[],S=[],L=[],B=[],I=[],j=[],m=[],A=(e,r)=>{var t=e[r];if(void 0!==t)return t;if("function"==typeof r)return r(e);var n=r;Array.isArray(r)||(n=r.split("."));for(var s=n.length,o=-1;e&&++o<s;)e=e[n[o]];return e},M=e=>"object"==typeof e&&"number"==typeof e._bitflags,E=1/0,F=-1/0,N=[];N.total=0;var T=null,O=a(""),q=(r=[],t=0,n={},s=e=>{for(var n=0,s=r[n],o=1;o<t;){var a=o+1;n=o,a<t&&r[a]._score<r[o]._score&&(n=a),r[n-1>>1]=r[n],o=1+(n<<1)}for(var i=n-1>>1;n>0&&s._score<r[i]._score;i=(n=i)-1>>1)r[n]=r[i];r[n]=s},n.add=e=>{var n=t;r[t++]=e;for(var s=n-1>>1;n>0&&e._score<r[s]._score;s=(n=s)-1>>1)r[n]=r[s];r[n]=e},n.poll=e=>{if(0!==t){var n=r[0];return r[0]=r[--t],s(),n}},n.peek=e=>{if(0!==t)return r[0]},n.replaceTop=e=>{r[0]=e,s()},n);return{single:(e,r)=>{if(!e||!r)return T;var t=u(e);M(r)||(r=g(r));var n=t.bitflags;return(n&r._bitflags)!==n?T:d(t,r)},go:(e,r,t)=>{if(!e)return t?.all?h(r,t):N;var n=u(e),s=n.bitflags,o=n.containsSpace,a=_(t?.threshold||0),i=t?.limit||E,l=0,c=0,v=r.length;function p(e){l<i?(q.add(e),++l):(++c,e._score>q.peek()._score&&q.replaceTop(e))}if(t?.key)for(var x=t.key,b=0;b<v;++b){var w=r[b],k=A(w,x);if(k&&(M(k)||(k=g(k)),(s&k._bitflags)===s)){var y=d(n,k);y!==T&&(y._score<a||(y.obj=w,p(y)))}}else if(t?.keys){var C=t.keys,S=C.length;e:for(var b=0;b<v;++b){for(var w=r[b],L=0,z=0;z<S;++z){var x=C[z],k=A(w,x);if(!k){j[z]=O;continue}M(k)||(k=g(k)),j[z]=k,L|=k._bitflags}if((s&L)===s){if(o)for(let e=0;e<n.spaceSearches.length;e++)B[e]=F;for(var z=0;z<S;++z){if((k=j[z])===O||(m[z]=d(n,k,!1,o),m[z]===T)){m[z]=O;continue}if(o)for(let e=0;e<n.spaceSearches.length;e++){if(I[e]>-1e3&&B[e]>F){var D=(B[e]+I[e])/4;D>B[e]&&(B[e]=D)}I[e]>B[e]&&(B[e]=I[e])}}if(o){for(let e=0;e<n.spaceSearches.length;e++)if(B[e]===F)continue e}else{var G=!1;for(let e=0;e<S;e++)if(m[e]._score!==F){G=!0;break}if(!G)continue}var H=new f(S);for(let e=0;e<S;e++)H[e]=m[e];if(o){var J=0;for(let e=0;e<n.spaceSearches.length;e++)J+=B[e]}else{var J=F;for(let e=0;e<S;e++){var y=H[e];if(y._score>-1e3&&J>F){var D=(J+y._score)/4;D>J&&(J=D)}y._score>J&&(J=y._score)}}if(H.obj=w,H._score=J,t?.scoreFn){if(!(J=t.scoreFn(H)))continue;J=_(J),H._score=J}J<a||p(H)}}}else for(var b=0;b<v;++b){var k=r[b];if(k&&(M(k)||(k=g(k)),(s&k._bitflags)===s)){var y=d(n,k);y!==T&&(y._score<a||p(y))}}if(0===l)return N;for(var K=Array(l),b=l-1;b>=0;--b)K[b]=q.poll();return K.total=l+c,K},prepare:a,cleanup:()=>{k.clear(),y.clear()}}})?t.apply(r,[]):t)&&(e.exports=n)}}]);