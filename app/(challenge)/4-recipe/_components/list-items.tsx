'use client'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { outfit, young } from '@/fonts/font'

interface ListItemsProps {
  title: string
  items: { label?: string; value: string }[]
  listType: 'unordered' | 'ordered'
  type?: 'item' | 'list'
}

const ListItems = ({ title, items, listType = 'unordered', type }: ListItemsProps) => {
  const List = listType === 'unordered' ? 'ul' : 'ol'
  return (
    <>
      <MotionSlot asChild isNested direction="up">
        <h2
          className={`font-semibold text-rose-800 ${type === 'item' ? `text-xl ${outfit.className}` : `${young.className} text-[28px]`}`}
        >
          {title}
        </h2>
      </MotionSlot>
      <MotionSlot asChild isNested staggerConfig={{ staggerChildren: 0.2, delayChildren: 0.2 }}>
        <List
          className={`ml-4 space-y-4 ${outfit.className} ${listType === 'unordered' ? 'list-disc' : 'list-decimal'}`}
        >
          {items.map(({ label, value }, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <MotionSlot asChild key={i} isNested direction="up">
              <li className="text-stone-600">
                {label && <span className="font-semibold text-stone-900">{label}: </span>} {value}
              </li>
            </MotionSlot>
          ))}
        </List>
      </MotionSlot>
    </>
  )
}

export default ListItems
