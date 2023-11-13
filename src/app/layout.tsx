import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VectorShift',
  description: 'Build chatbots, document search engines, and document creation workflows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          {children}
        </div>
      <Footer />
      </body>
    </html>
  )
}
