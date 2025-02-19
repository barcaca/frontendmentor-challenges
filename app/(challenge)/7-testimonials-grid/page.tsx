import bgPattern from '@/assets/7-testimonials-grid/bg-pattern-quotation.svg'
import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { barlow } from '@/fonts/font'
import Image from 'next/image'
import { testimonials } from './data/data-07'

export const metadata = {
  title: 'Desafio 7',
}

const TestimonialGridPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#ECF2F8] p-6">
      <main className="flex flex-1 items-center justify-center">
        <MotionSlot asChild staggerConfig={{ staggerChildren: 0.4 }}>
          <BentoGrid
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
                <MotionSlot
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={i}
                  staggerConfig={{ delayChildren: 0.2, staggerChildren: 0.2 }}
                  scaleEffect
                  initialScale={0.75}
                  asChild
                  isNested
                >
                  <BentoCard className={`${gridCols[id]} rounded-xl border`}>
                    <Card className="relative w-full space-y-4 border-none bg-inherit px-8 pt-7 pb-8">
                      {id === 1 && (
                        <Image
                          className="absolute top-0 right-6 sm:right-20 "
                          src={bgPattern}
                          alt="bg-pattern"
                          width={104}
                          height={102}
                        />
                      )}
                      <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-0">
                        <MotionSlot asChild isNested scaleEffect initialScale={0.75}>
                          <Image
                            className="rounded-full ring-2 ring-[#A775F1]"
                            src={avatar}
                            alt="Avatar"
                            width={28}
                            height={28}
                          />
                        </MotionSlot>
                        <MotionSlot isNested offset={0}>
                          <CardTitle
                            className={`${textColor} font-medium text-[13px] leading-none`}
                          >
                            {name}
                          </CardTitle>
                          <CardDescription
                            className={`${textColor} font-medium text-[11px] leading-none opacity-70`}
                          >
                            {verified ? 'Verified Graduate' : 'Unverified Graduate'}
                          </CardDescription>
                        </MotionSlot>
                      </CardHeader>
                      <CardContent className={`${textColor} relative z-50 space-y-4 p-0`}>
                        <MotionSlot asChild direction="up" isNested>
                          <h2 className="font-semibold text-xl">{title}</h2>
                        </MotionSlot>
                        <MotionSlot asChild direction="up" isNested>
                          <p className="font-medium text-[13px] opacity-70">{quote}</p>
                        </MotionSlot>
                      </CardContent>
                    </Card>
                  </BentoCard>
                </MotionSlot>
              )
            })}
          </BentoGrid>
        </MotionSlot>
      </main>
      <Footer />
    </div>
  )
}

export default TestimonialGridPage
