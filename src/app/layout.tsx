import './styles/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://liger.netlify.app/'),
  title: 'Liger - Site of LionelLeoPlayz',
  description: "Welcome to Liger, the official website of LionelLeoPlayz! Here you'll find everything I mostly create, like games, videos, etc.",
  openGraph: {
    type: 'website',
    title: "LionelLeoPlayz's Website",
    description: 'The official website of LionelLeoPlayz!',
    images: 'https://res.cloudinary.com/dtcignhud/image/upload/v1700095152/logo.webp'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">      
      <body className="lightMode">{children}</body>
    </html>
  )
}