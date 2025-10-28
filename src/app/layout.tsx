import type { Metadata } from 'next'
import { Roboto, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { Toaster } from 'sonner'

//  Load Roboto as global primary font
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'], // optional weights
})

// Keep Geist fonts if you still use them for some headings/mono text
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

//  Optimized metadata based on your hero section
export const metadata: Metadata = {
  title: 'UnBurdened | Growth at Work Starts Within',
  description:
    'The UnBurdened Mind helps leaders navigate the space between personal insight and professional influence. Because real change moves through people, not processes.',
  keywords: [
    'leadership development',
    'personal growth',
    'professional coaching',
    'mindfulness',
    'wellbeing',
    'UnBurdened Mind',
  ],
  openGraph: {
    title: 'Growth at Work Starts With Growth Within | UnBurdened',
    description:
      'Guiding leaders to grow from within — The UnBurdened Mind blends personal insight with professional influence.',
    url: 'https://unburdened-website.vercel.app',
    siteName: 'UnBurdened',
    images: [
      {
        url: '/david-profile.jpg', // replace with your hero/banner image if you have one
        width: 1200,
        height: 630,
        alt: 'UnBurdened Hero Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnBurdened | Growth at Work Starts Within',
    description:
      'Helping leaders connect personal insight with professional influence.',
    images: ['/david-profile.jpg'],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} font-roboto antialiased min-h-screen bg-white text-black`}
      >
        <Toaster position="top-right" />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  )
}
