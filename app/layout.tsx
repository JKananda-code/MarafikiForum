import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-zinc-50 text-zinc-900'}>
        <header className="border-b p-4 flex justify-between">
          <a href="/" className="font-bold">MarafikiForum</a>
          <nav className="flex gap-4 text-sm">
            <a href="/forum">Forum</a>
            <a href="/jobs">Jobs</a>
            <a href="/premium">Premium</a>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
