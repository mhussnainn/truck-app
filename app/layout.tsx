import type { Metadata } from 'next'
import { Geist, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: 'DH Truck Repairing | 24/7 Emergency Truck & Trailer Repair Services',
  description: 'Fast roadside assistance, heavy-duty repairs, and fleet services. DH Truck Repairing provides certified mechanics and transparent pricing for all your truck repair needs.',
  generator: 'v0.app',
  openGraph: {
    title: 'DH Truck Repairing | Expert Truck Repair Services',
    description: 'Fast roadside assistance, heavy-duty repairs, and fleet services you can trust.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
