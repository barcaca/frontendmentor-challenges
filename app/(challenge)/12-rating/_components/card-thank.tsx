import thanks from '@/assets/12-rating/illustration-thank-you.svg'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { overpass } from '@/fonts/font'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface CardThanksProps {
  rating: number
  onReset: () => void
}

const CardThanks = ({ rating, onReset }: CardThanksProps) => {
  return (
    <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2 }}>
      <Card
        className={`relative w-full max-w-[412px] space-y-6 border-none bg-[#252d37] p-6 lg:space-y-8 lg:p-8 ${overpass.className}`}
      >
        <Button
          onClick={onReset}
          className="absolute top-6 left-6 size-11 rounded-full bg-[#fb7413] text-[#121417] "
        >
          <ArrowLeft />
        </Button>
        <MotionSlot isNested className="flex w-full items-center justify-center">
          <Image className="h-[100px] w-[150px]" src={thanks} alt="star" width={200} height={200} />
        </MotionSlot>
        <MotionSlot isNested scaleEffect initialScale={0.75} offset={0} className="flex w-full">
          <div className="mx-auto flex h-11 items-center rounded-full bg-[#121417]/40 px-4 text-[#fb7413] text-sm">
            You select {rating} out of 5
          </div>
        </MotionSlot>
        <MotionSlot asChild isNested direction="up">
          <CardHeader className="items-center justify-center p-0 text-center">
            <CardTitle className="font-semibold text-[28px] text-white">Thank you!</CardTitle>
            <CardDescription>
              We appreciate you taking the time to give a rating. If you ever need more support,
              don’t hesitate to get in touch!
            </CardDescription>
          </CardHeader>
        </MotionSlot>
      </Card>
    </MotionSlot>
  )
}

export default CardThanks
