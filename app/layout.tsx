import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-zinc-50 text-zinc-900'}>
        <header className="border-b p-4 flex justify-between">
          <Link href="/" className="font-bold">MarafikiForum</Link>
          <nav className={inter.className + ' flex gap-4 text-sm'}>
            <Link href="/forum">Forum</Link>
            <Link href="/jobs">Jobs</Link>
            <Link href="/premium">Premium</Link>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
