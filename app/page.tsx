import { Footer } from '@/components/footer'
import Link from 'next/link'

const links = [
  { href: '1-qr-code', label: 'Desafio 1 - QR code component' },
  { href: '2-blog-preview', label: 'Desafio 2 - Blog preview card' },
  { href: '3-social-profile', label: 'Desafio 3 - Social profile' },
  { href: '4-recipe', label: 'Desafio 4 - Recipe' },
  { href: '5-product-preview', label: 'Desafio 5 - Product Preview Card' },
  { href: '6-four-card', label: 'Desafio 6 - Four Card Feature' },
  { href: '7-testimonials-grid', label: 'Desafio 7 - Testimonials Grid' },
  { href: '8-article-preview', label: 'Desafio 8 - Article Preview' },
  { href: '9-newsletter', label: 'Desafio 9 - Newsletter' },
  { href: '10-time-tracking', label: 'Desafio 10 - Time Tracking' },
  { href: '11-tip-calculator', label: 'Desafio 11 - Tip Calculator' },
  { href: '12-rating', label: 'Desafio 12 - Rating' },
]

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col">
      <header className="flex-1 p-8">
        <h1 className="text-center font-bold text-3xl">Frontend Mentor Challenges</h1>
        <nav className="p-8">
          <ul className="space-y-3">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href} className="text-blue-500 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Footer />
    </div>
  )
}
