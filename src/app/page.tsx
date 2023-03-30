import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className="overflow-hidden">
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>
    </div>

  )
}
