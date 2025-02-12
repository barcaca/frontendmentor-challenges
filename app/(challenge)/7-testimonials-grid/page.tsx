import { Footer } from '@/components/footer'
import { item } from '@/components/shared/_animate'
import {
  MotionBentoCard,
  MotionBentoGrid,
  MotionImage,
} from '@/components/shared/_components/motion-qr-code'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { barlow } from '@/fonts/font'
import * as motion from 'motion/react-client'
import { testimonials } from './data/data-07'

const parentVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.4 } },
}

const cardAnimation = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
}

const TestimonialGridPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#ECF2F8] p-6">
      <main className="flex flex-1 items-center justify-center">
        <MotionBentoGrid
          variants={parentVar}
          initial={'hidden'}
          whileInView={'show'}
          className={`${barlow.className} !auto-rows-auto max-w-[1110px] gap-8 lg:grid-cols-4`}
        >
          {testimonials.map(({ id, avatar, name, verified, title, quote }, i) => {
            const gridCols: Record<number, string> = {
              1: 'sm:col-span-2 bg-[#733FC8]',
              2: 'bg-[#48556A]',
              3: '',
              4: 'sm:col-span-2 bg-[#19202D]',
              5: 'sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1',
            }
            const textColor = id === 3 || id === 5 ? 'text-[#48556A]' : 'text-white'
            return (
              <MotionBentoCard
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                variants={cardAnimation}
                className={`${gridCols[id]} rounded-xl border`}
              >
                <Card className="w-full space-y-4 border-none bg-inherit px-8 pt-7 pb-8">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-0">
                    <MotionImage
                      variants={item.scale}
                      className="rounded-full ring-2 ring-[#A775F1]"
                      src={avatar}
                      alt="Avatar"
                      width={28}
                      height={28}
                    />
                    <motion.div variants={item.translateYDown}>
                      <CardTitle className={`${textColor} font-medium text-[13px] leading-none`}>
                        {name}
                      </CardTitle>
                      <CardDescription
                        className={`${textColor} font-medium text-[11px] leading-none opacity-70`}
                      >
                        {verified ? 'Verified Graduate' : 'Unverified Graduate'}
                      </CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className={`${textColor} space-y-4 p-0`}>
                    <motion.h2 variants={item.translateYUp} className="font-semibold text-xl">
                      {title}
                    </motion.h2>
                    <motion.p
                      variants={item.translateYUp}
                      className="font-medium text-[13px] opacity-70"
                    >
                      {quote}
                    </motion.p>
                  </CardContent>
                </Card>
              </MotionBentoCard>
            )
          })}
        </MotionBentoGrid>
      </main>
      <Footer />
    </div>
  )
}

export default TestimonialGridPage
