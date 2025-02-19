import MotionSlot from '@/components/shared/_components/motion-slot'
import { outfit, young } from '@/fonts/font'
const nutritionTable = [
  { label: 'Calories', value: '277kcal' },
  { label: 'Carbs', value: '0g' },
  { label: 'Protein', value: '20g' },
  { label: 'Fat', value: '22g' },
]

const Nutrition = () => {
  return (
    <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2 }}>
      <div className="space-y-4">
        <MotionSlot asChild isNested direction="right">
          <h2 className={`font-semibold text-rose-800 ${young.className} text-[28px]`}>
            Nutrition
          </h2>
        </MotionSlot>
        <MotionSlot asChild isNested direction="left">
          <p className="text-stone-600">
            The table below shows nutritional values per serving without the additional fillings.{' '}
          </p>
        </MotionSlot>
        <table className={`${outfit.className} w-full`}>
          <MotionSlot asChild isNested staggerConfig={{ staggerChildren: 0.2 }}>
            <tbody className="text-stone-600 ">
              {nutritionTable.map(({ label, value }, i) => (
                <MotionSlot // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={i}
                  isNested
                  direction="up"
                  asChild
                >
                  <tr className="h-10 border-stone-200 border-b last:border-none">
                    <td className="w-1/2 pl-8">{label}</td>
                    <td className="w-1/2 text-left font-semibold text-rose-800">{value}</td>
                  </tr>
                </MotionSlot>
              ))}
            </tbody>
          </MotionSlot>
        </table>
      </div>
    </MotionSlot>
  )
}

export default Nutrition
