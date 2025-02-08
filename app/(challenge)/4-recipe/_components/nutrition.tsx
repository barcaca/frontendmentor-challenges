import { containerOpacity, item } from '@/components/shared/_animate'
import { outfit, young } from '@/fonts/font'
import * as motion from 'motion/react-client'
const nutritionTable = [
  { label: 'Calories', value: '277kcal' },
  { label: 'Carbs', value: '0g' },
  { label: 'Protein', value: '20g' },
  { label: 'Fat', value: '22g' },
]

const Nutrition = () => {
  return (
    <motion.div
      variants={containerOpacity}
      initial={'hidden'}
      whileInView={'show'}
      className="space-y-4"
    >
      <motion.h2
        variants={item.translateXRight}
        className={`font-semibold text-rose-800 ${young.className} text-[28px]`}
      >
        Nutrition
      </motion.h2>
      <motion.p variants={item.translateXLeft} className="text-stone-600">
        The table below shows nutritional values per serving without the additional fillings.{' '}
      </motion.p>
      <table className={`${outfit.className} w-full`}>
        <motion.tbody variants={containerOpacity} className="text-stone-600 ">
          {nutritionTable.map(({ label, value }, i) => (
            <motion.tr
              variants={item.translateYUp}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
              className="h-10 border-stone-200 border-b last:border-none"
            >
              <td className="w-1/2 pl-8">{label}</td>
              <td className="w-1/2 text-left font-semibold text-rose-800">{value}</td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </motion.div>
  )
}

export default Nutrition
