import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { manrope } from '@/fonts/font'

const socialItems = [
  { icon: Icons.pinterest, label: 'pinterest' },
  { icon: Icons.facebook, label: 'facebook' },
  { icon: Icons.x, label: 'x' },
]

const ArticleSocials = () => {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-[#ecf2f8] text-[13px] uppercase tracking-[5px] opacity-70 ${manrope.className}`}
      >
        Share
      </span>
      {socialItems.map(({ icon: Icon, label }) => {
        return (
          <Button
            variant={'ghost'}
            size={'icon'}
            key={label}
            className="size-8 rounded-full text-white"
          >
            <Icon />
          </Button>
        )
      })}
    </div>
  )
}

export default ArticleSocials
