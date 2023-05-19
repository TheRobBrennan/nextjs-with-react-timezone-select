import Image from 'next/image'
import Timezone from './components/timezone'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-left justify-between p-2">
      <Timezone />
    </main>
  )
}
