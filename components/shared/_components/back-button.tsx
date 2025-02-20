import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

const BackButton = () => {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: 'outline', size: 'icon' }),
        'fixed top-4 left-4 z-50'
      )}
    >
      <ArrowLeftCircle />
    </Link>
  )
}

export default BackButton
