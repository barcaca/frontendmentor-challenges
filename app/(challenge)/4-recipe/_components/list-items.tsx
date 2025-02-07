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
      <h2
        className={`font-semibold text-rose-800 ${type === 'item' ? `text-xl ${outfit.className}` : `${young.className} text-[28px]`}`}
      >
        {title}
      </h2>
      <List
        className={`ml-4 space-y-4 ${outfit.className} ${listType === 'unordered' ? 'list-disc' : 'list-decimal'}`}
      >
        {items.map(({ label, value }, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={i} className="text-stone-600">
            {label && <span className="font-semibold text-stone-900">{label}: </span>} {value}
          </li>
        ))}
      </List>
    </>
  )
}

export default ListItems
