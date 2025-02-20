import signUpDesktop from '@/assets/9-newsletter/illustration-sign-up-desktop.svg'
import signUpMobile from '@/assets/9-newsletter/illustration-sign-up-mobile.svg'
import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { roboto } from '@/fonts/font'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import FormNewsletter from './_components/form-newsletter'

export const metadata = {
  title: 'Desafio 9',
}

const NewsletterPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#242742] sm:p-6">
      <main className="flex h-full w-full flex-1 items-center justify-center">
        <MotionSlot asChild staggerConfig={{ staggerChildren: 0.4, delayChildren: 0.4 }}>
          <Card
            className={`${roboto.className} max-w-[928px] rounded-t-none sm:flex sm:flex-row sm:gap-6 sm:rounded-md`}
          >
            <MotionSlot
              isNested
              scaleEffect
              initialScale={0.75}
              className="order-2 overflow-hidden sm:py-6 sm:pr-6"
            >
              <Image
                src={signUpDesktop}
                className="hidden h-full rounded-xl object-cover object-right sm:block"
                alt="illustration sign up"
                width={400}
                height={593}
              />
              <Image
                src={signUpMobile}
                className="sm:hidden"
                alt="illustration sign up"
                width={1000}
                height={1000}
              />
            </MotionSlot>
            <div className="my-auto flex h-full flex-col justify-center sm:px-4">
              <MotionSlot asChild isNested direction="left">
                <CardHeader className="space-y-5 p-6">
                  <CardTitle className="font-semibold text-[#242742] text-[40px] md:text-[56px]">
                    Stay updated!
                  </CardTitle>
                  <CardDescription className="text-base">
                    Join 60,000+ product managers receiving monthly updates on:
                  </CardDescription>
                </CardHeader>
              </MotionSlot>
              <MotionSlot
                asChild
                isNested
                staggerConfig={{ staggerChildren: 0.2, delayChildren: 0.2 }}
              >
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {list.map((item, index) => (
                      <MotionSlot
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        asChild
                        isNested
                        staggerConfig={{ staggerChildren: 0.2, when: 'beforeChildren' }}
                      >
                        <li className="flex gap-4 text-[#36384e]">
                          <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#ff6257]">
                            <MotionSlot
                              asChild
                              isNested
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <CheckIcon size={16} className="text-white" />
                            </MotionSlot>
                          </span>
                          {item}
                        </li>
                      </MotionSlot>
                    ))}
                  </ul>
                </CardContent>
              </MotionSlot>
              <FormNewsletter />
            </div>
          </Card>
        </MotionSlot>
      </main>
      <Footer />
    </div>
  )
}

const list = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!',
]

export default NewsletterPage
