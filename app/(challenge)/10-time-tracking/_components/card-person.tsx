import avatar from '@/assets/10-time-tracking/image-jeremy.png'
import { BentoCard } from '@/components/ui/bento-grid'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const CardPerson = () => {
  return (
    <BentoCard className="min-h-[204px] sm:col-span-2 lg:col-span-1 lg:row-span-2">
      <Card className="relative w-full border-none">
        <CardHeader className="absolute z-10 flex h-3/4 w-full flex-row items-center gap-4 rounded-xl bg-[#7536d3] lg:flex-col lg:items-start lg:justify-center">
          <Image
            className="size-16 max-h-20 max-w-20 rounded-full border-2 border-white lg:h-full lg:w-full"
            src={avatar}
            alt="avatar"
            width={80}
            height={80}
          />
          <div>
            <span className="text-[#bdc1ff] text-sm lg:text-base">Report for</span>
            <CardTitle className="font-medium text-2xl text-white lg:text-[40px]">
              Jeremy Robson
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="absolute flex h-full w-full items-end justify-center rounded-xl bg-[#1c1f4a] pb-3 lg:flex-col lg:items-start lg:justify-end">
          <Link
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'h-8 w-full text-white lg:justify-start '
            )}
            href={{ pathname: '/10-time-tracking', query: { type: 'daily' } }}
          >
            Daily
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'h-8 w-full text-white lg:justify-start'
            )}
            href={{ pathname: '/10-time-tracking', query: { type: 'weekly' } }}
          >
            Weekly
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'h-8 w-full text-white lg:justify-start'
            )}
            href={{ pathname: '/10-time-tracking', query: { type: 'monthly' } }}
          >
            Monthly
          </Link>
        </CardContent>
      </Card>
    </BentoCard>
  )
}

export default CardPerson
