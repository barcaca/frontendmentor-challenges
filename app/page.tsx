import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const links = [{ href: '', label: '' }]

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

const socials = [
  { name: 'GitHub', url: 'https://github.com/barcaca', icon: Icons.gitHub },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/luan-barcaça/',
    icon: Icons.linkedin,
  },
  { name: 'Email', url: 'mailto:luan.barcaca@gmail.com', icon: Icons.email },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-4 py-8 md:flex-row md:justify-between">
      <p className="order-2 font-semibold text-muted-foreground text-sm md:order-1">
        © {year} Luan, All Rights Reserved
      </p>
      <div className="order-1 inline-flex items-center gap-8 md:order-2">
        {socials.map(social => {
          return (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'icon' })}
            >
              <social.icon className="size-6" />
            </Link>
          )
        })}
      </div>
    </footer>
  )
}
