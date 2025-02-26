import avatar from '@/assets/10-time-tracking/image-jeremy.png'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { BentoCard } from '@/components/ui/bento-grid'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  {
    label: 'Daily',
    value: 'daily',
  },
  {
    label: 'Weekly',
    value: 'weekly',
  },
  {
    label: 'Monthly',
    value: 'monthly',
  },
]

const CardPerson = () => {
  return (
    <BentoCard className="min-h-[204px] sm:col-span-2 lg:col-span-1 lg:row-span-2">
      <Card className="relative w-full border-none">
        <CardHeader className="absolute z-10 flex h-3/4 w-full rounded-xl bg-[#7536d3]">
          <MotionSlot
            isNested
            className="flex h-full w-full flex-row items-center gap-8 rounded-xl lg:flex-col lg:items-start lg:justify-center"
          >
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
          </MotionSlot>
        </CardHeader>
        <CardContent className="absolute flex h-full w-full items-end justify-center rounded-xl bg-[#1c1f4a] pb-3 lg:flex-col lg:items-start lg:justify-end">
          {links.map(({ label, value }) => (
            <MotionSlot key={label} asChild isNested>
              <Link
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'h-8 w-full text-white lg:justify-start '
                )}
                href={{ pathname: '/10-time-tracking', query: { type: value } }}
              >
                {label}
              </Link>
            </MotionSlot>
          ))}
        </CardContent>
      </Card>
    </BentoCard>
  )
}

export default CardPerson
