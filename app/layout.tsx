import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Frontend Mentor Desafios',
    template: '%s | Frontend Mentor',
  },
  description:
    'Coleção de desafios do Frontend Mentor desenvolvidos com Next.js e estilizados com Tailwind CSS.',
  keywords: 'Frontend Mentor, desafios, Next.js, Tailwind CSS, TypeScript, React, Motion',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative scroll-smooth antialiased">{children}</body>
    </html>
  )
}
