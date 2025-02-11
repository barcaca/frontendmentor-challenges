import { Footer } from '@/components/footer'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { barlow } from '@/fonts/font'
import Image from 'next/image'
import { testimonials } from './data/data-07'

const TestimonialGridPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#ECF2F8] p-6">
      <main className="flex flex-1 items-center justify-center">
        <BentoGrid
          className={`${barlow.className} !auto-rows-auto max-w-[1110px] gap-8 lg:grid-cols-4`}
        >
          {testimonials.map(({ id, avatar, name, verified, title, quote }) => {
            const gridCols = {
              1: 'sm:col-span-2 bg-[#733FC8]',
              2: 'bg-[#48556A]',
              3: '',
              4: 'sm:col-span-2 bg-[#19202D]',
              5: 'sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-1',
            }[id]
            const textColor = id === 3 || id === 5 ? 'text-[#48556A]' : 'text-white'

            return (
              <BentoCard key={id} className={`${gridCols} rounded-xl border`}>
                <Card className="w-full space-y-4 border-none bg-inherit px-8 pt-7 pb-8">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-0">
                    <Image
                      className="rounded-full ring-2 ring-[#A775F1]"
                      src={avatar}
                      alt="Avatar"
                      width={28}
                      height={28}
                    />
                    <div>
                      <CardTitle className={`${textColor} font-medium text-[13px] leading-none`}>
                        {name}
                      </CardTitle>
                      <CardDescription
                        className={`${textColor} font-medium text-[11px] leading-none opacity-70`}
                      >
                        {verified ? 'Verified Graduate' : 'Unverified Graduate'}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className={`${textColor} space-y-4 p-0`}>
                    <h2 className="font-semibold text-xl">{title}</h2>
                    <p className="font-medium text-[13px] opacity-70">{quote}</p>
                  </CardContent>
                </Card>
              </BentoCard>
            )
          })}
        </BentoGrid>
      </main>
      <Footer />
    </div>
  )
}

export default TestimonialGridPage
