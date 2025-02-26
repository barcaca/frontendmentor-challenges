import MotionSlot from '@/components/shared/_components/motion-slot'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import * as motion from 'motion/react-client'

interface TipDisplayProps {
  total: number
  tipAmount: number
  onReset: () => void
}

const TipDisplay = ({ total, tipAmount, onReset }: TipDisplayProps) => {
  return (
    <MotionSlot
      isNested
      className="flex flex-col gap-6 rounded-2xl bg-[#00494d] p-6 lg:justify-between lg:p-10"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between ">
          <p className="flex flex-col font-semibold text-[#5e7a7d]">
            Tip Amount
            <span>/ person</span>
          </p>
          <span className="font-semibold text-[#26c0ab] text-[32px] lg:text-5xl">
            {!formatCurrency(tipAmount) ? '0.00' : formatCurrency(tipAmount)}
          </span>
        </div>
        <div className="flex items-center justify-between ">
          <p className="flex flex-col font-semibold text-[#5e7a7d]">
            Total
            <span>/ person</span>
          </p>
          <span className="font-semibold text-[#26c0ab] text-[32px] lg:text-5xl">
            {!formatCurrency(total) ? '0.00' : formatCurrency(total)}
          </span>
        </div>
      </div>
      <Button
        type="button"
        onClick={onReset}
        className="h-12 w-full bg-[#26c0ab] font-semibold text-[#00494d] text-xl uppercase hover:bg-[#9fe8df]"
        asChild
      >
        <motion.button whileTap={{ y: 1 }}>Reset</motion.button>
      </Button>
    </MotionSlot>
  )
}

export default TipDisplay
