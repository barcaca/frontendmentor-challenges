'use client'
import { container, item } from '@/components/shared/_animate'
import { outfit, young } from '@/fonts/font'
import * as motion from 'motion/react-client'

interface ListItemsProps {
  title: string
  items: { label?: string; value: string }[]
  listType: 'unordered' | 'ordered'
  type?: 'item' | 'list'
}

const listAnimation = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const ListItems = ({ title, items, listType = 'unordered', type }: ListItemsProps) => {
  const List = listType === 'unordered' ? 'ul' : 'ol'
  const MotionList = motion.create(List)
  return (
    <>
      <motion.h2
        variants={item.translateYUp}
        className={`font-semibold text-rose-800 ${type === 'item' ? `text-xl ${outfit.className}` : `${young.className} text-[28px]`}`}
      >
        {title}
      </motion.h2>
      <MotionList
        variants={container}
        className={`ml-4 space-y-4 ${outfit.className} ${listType === 'unordered' ? 'list-disc' : 'list-decimal'}`}
      >
        {items.map(({ label, value }, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <motion.li variants={listAnimation} key={i} className="text-stone-600">
            {label && <span className="font-semibold text-stone-900">{label}: </span>} {value}
          </motion.li>
        ))}
      </MotionList>
    </>
  )
}

export default ListItems
