import type { Metadata } from 'next'
import { nunito } from './ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Solart',
  description: 'Display your own world through art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  )
}
