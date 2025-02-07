import { outfit, young } from '@/fonts/font'

const nutritionTable = [
  { label: 'Calories', value: '277kcal' },
  { label: 'Carbs', value: '0g' },
  { label: 'Protein', value: '20g' },
  { label: 'Fat', value: '22g' },
]

const Nutrition = () => {
  return (
    <div className="space-y-4">
      <h2 className={`font-semibold text-rose-800 ${young.className} text-[28px]`}>Nutrition</h2>
      <p className="text-stone-600">
        The table below shows nutritional values per serving without the additional fillings.{' '}
      </p>
      <table className={`${outfit.className} w-full`}>
        <tbody className="text-stone-600 ">
          {nutritionTable.map(({ label, value }, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <tr key={i} className="h-10 border-stone-200 border-b last:border-none">
              <td className="w-1/2 pl-8">{label}</td>
              <td className="w-1/2 text-left font-semibold text-rose-800">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Nutrition
