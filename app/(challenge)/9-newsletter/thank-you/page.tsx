import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { roboto } from '@/fonts/font'
import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Desafio 9',
}

const ThankYouPage = async () => {
  const cookieStore = await cookies()
  const email = cookieStore.get('userEmail')?.value || ''

  if (!email) redirect('/9-newsletter')

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#242742] sm:p-6">
      <main className="flex flex-1 items-center justify-center">
        <AnimatePresence>
          <MotionSlot
            layout
            asChild
            staggerConfig={{ staggerChildren: 0.4, when: 'beforeChildren' }}
            scaleEffect
            initialScale={0.75}
          >
            <Card
              className={`${roboto.className} flex min-h-screen w-full max-w-[504px] flex-col justify-between space-y-0 rounded-none sm:min-h-max sm:rounded-lg sm:p-10`}
            >
              <MotionSlot asChild isNested>
                <CardContent className="my-auto space-y-6 p-6 ">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#ff6257]">
                    <CheckIcon size={48} className="text-white" />
                  </span>
                  <CardTitle className="font-semibold text-[#242742] text-[40px] leading-none sm:text-[56px]">
                    Thanks for subscribing!
                  </CardTitle>
                  <CardDescription className="text-base leading-[22px]">
                    A confirmation email has been sent to{' '}
                    <span className="font-semibold">{email}</span>. Please open it and click the
                    button inside to confirm your subscription.
                  </CardDescription>
                </CardContent>
              </MotionSlot>
              <MotionSlot asChild isNested direction="up">
                <CardFooter className="sm:pt-6">
                  <Link
                    href="/9-newsletter"
                    className={cn(
                      buttonVariants(),
                      'h-14 w-full bg-[#242742] from-[#FF5476] to-[#FF693E] shadow-md transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:shadow-[#ff6257]/50 hover:shadow-lg'
                    )}
                  >
                    Dismiss message
                  </Link>
                </CardFooter>
              </MotionSlot>
            </Card>
          </MotionSlot>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default ThankYouPage
