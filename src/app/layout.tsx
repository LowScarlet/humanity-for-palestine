import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Are You Human?',
  description: '❤ Are you a human? Come on, prove yourself.',
  metadataBase: new URL('https://lowscarlet.my.id'),
  openGraph: {
    type: "website",
    url: "https://humanity.lowscarlet.my.id",
    title: "Are You Human?",
    description: "❤ Are you a human? Come on, prove yourself.",
    siteName: "Are You Human?",
    images: [
      '/pp.png'
    ]
  },
  twitter: {
    card: 'summary',
  },
  colorScheme: "light",
  creator: "Tegar Maulana Fahreza",
  publisher: "Vercel"
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
