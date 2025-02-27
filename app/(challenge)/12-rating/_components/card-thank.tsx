import thanks from '@/assets/12-rating/illustration-thank-you.svg'
import { Button } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface CardThanksProps {
  rating: number
  onReset: () => void
}

const CardThanks = ({ rating, onReset }: CardThanksProps) => {
  return (
    <>
      <Button
        onClick={onReset}
        className="absolute top-6 left-6 size-11 rounded-full bg-[#fb7413] text-[#121417] "
      >
        <ArrowLeft />
      </Button>
      <div className="flex w-full items-center justify-center">
        <Image className="h-[100px] w-[150px]" src={thanks} alt="star" width={200} height={200} />
      </div>
      <div className="flex w-full">
        <div className="mx-auto flex h-11 items-center rounded-full bg-[#121417]/40 px-4 text-[#fb7413] text-sm">
          You select {rating} out of 5
        </div>
      </div>
      <CardHeader className="items-center justify-center p-0 text-center">
        <CardTitle className="font-semibold text-[28px] text-white">Thank you!</CardTitle>
        <CardDescription>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t
          hesitate to get in touch!
        </CardDescription>
      </CardHeader>
    </>
  )
}

export default CardThanks
