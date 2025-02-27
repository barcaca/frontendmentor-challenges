import star from '@/assets/12-rating/icon-star.svg'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

interface CardRatingProps {
  rating: number
  onRating: (rating: number) => void
  onSubmit: () => void
}

const CardRating = ({ onRating, rating, onSubmit }: CardRatingProps) => {
  return (
    <>
      <div className="flex size-11 items-center justify-center rounded-full bg-[#121417]/40 lg:size-14">
        <Image src={star} alt="star" width={16} height={16} />
      </div>
      <CardHeader className="space-y-3 p-0">
        <CardTitle className="font-semibold text-[28px] text-white lg:text-[32px]">
          How did we do?
        </CardTitle>
        <CardDescription className="text-muted-foreground lg:text-lg">
          Please let us know how we did with your support request. All feedback is appreciated to
          help us improve our offering!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-around space-x-3 p-0">
        {[1, 2, 3, 4, 5].map(rate => (
          <Button
            key={rate}
            variant={'ghost'}
            size={'icon'}
            onClick={() => onRating(rate)}
            className={`${rating === rate ? 'bg-[#fb7413] text-[#121417]' : 'bg-[#121417]/40 text-[#959eac]'} size-11 items-center justify-center rounded-full font-semibold lg:size-14 lg:text-lg`}
          >
            {rate}
          </Button>
        ))}
      </CardContent>
      <CardFooter className="p-0">
        <Button
          type="button"
          variant={'ghost'}
          onClick={onSubmit}
          disabled={!rating}
          className="h-11 w-full rounded-full bg-[#fb7413] text-[#121417] lg:text-lg uppercase leading-none"
        >
          Submit
        </Button>
      </CardFooter>
    </>
  )
}

export default CardRating
