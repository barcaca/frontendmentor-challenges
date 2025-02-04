import Link from 'next/link'
import { Icons } from './icons'
import { buttonVariants } from './ui/button'

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
