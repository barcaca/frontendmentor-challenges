import MotionSlot from '@/components/shared/_components/motion-slot'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { EllipsisIcon } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import Image from 'next/image'
import type { TrackedActivityResponse } from '../_types/type'

interface CardActivityProps {
  item: TrackedActivityResponse
  type: 'daily' | 'weekly' | 'monthly'
}

const CardActivity = ({ item, type }: CardActivityProps) => {
  return (
    <Card className="relative w-full overflow-hidden border-none bg-transparent">
      <CardHeader
        className={`${item.color} absolute z-10 h-full w-full overflow-hidden rounded-t-xl rounded-b-xl`}
      >
        <Image
          className=" -top-1 absolute right-4"
          src={item.icon}
          alt={item.title}
          width={80}
          height={50}
        />
      </CardHeader>
      <div className="absolute bottom-0 z-20 flex h-4/5 w-full flex-col gap-6 rounded-xl bg-[#1c1f4a] p-6">
        <div className="flex items-center justify-between">
          <CardTitle className="font-semibold text-lg text-white">{item.title}</CardTitle>
          <Button variant={'ghost'} size={'icon'} className="text-white">
            <EllipsisIcon />
          </Button>
        </div>
        <AnimatePresence key={type} mode="wait">
          <MotionSlot key={'current'} asChild direction="right">
            <div className="flex items-center justify-between gap-2 lg:flex-col lg:items-start">
              <span className="font-medium text-[32px] text-white leading-none lg:text-[54px]">
                {item.timeframes[type].current}hrs
              </span>
              <span className="text-[#bdc1ff] text-sm">
                Last {type} {item.timeframes[type].previous}hrs
              </span>
            </div>
          </MotionSlot>
        </AnimatePresence>
      </div>
    </Card>
  )
}

export default CardActivity
