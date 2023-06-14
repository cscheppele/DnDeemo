import '../styles/globals.css'
import { Inter } from 'next/font/google'

//This file is one of the defaults, I never deleted it or reused it, thinking it might come in
//handy as I started breaking down my components further, but never made it to that point.  as 
//it is, this file does nothing.

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DnDeemo',
  description: 'DnD Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


