import { Metadata } from 'next'

import { Header } from '@/components/header'

import Chats from './components/chats'

export const metadata: Metadata = {
  title: 'Playground'
}

export default function IndexPage() {
  return (
    <>
      <Header />
      <main className="bg-muted/50 flex flex-1 flex-col">
        <Chats />
      </main>
    </>
  )
}
