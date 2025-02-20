import signUpDesktop from '@/assets/9-newsletter/illustration-sign-up-desktop.svg'
import signUpMobile from '@/assets/9-newsletter/illustration-sign-up-mobile.svg'
import { Footer } from '@/components/footer'
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
        <Card
          className={`${roboto.className} max-w-[928px] rounded-t-none sm:flex sm:flex-row sm:gap-6 sm:rounded-md`}
        >
          <div className="order-2 overflow-hidden sm:py-6 sm:pr-6">
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
          </div>
          <div className="my-auto flex h-full flex-col justify-center sm:px-4">
            <CardHeader className="space-y-5 p-6">
              <CardTitle className="font-semibold text-[#242742] text-[40px] md:text-[56px]">
                Stay updated!
              </CardTitle>
              <CardDescription className="text-base">
                Join 60,000+ product managers receiving monthly updates on:
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {list.map((item, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <li key={index} className="flex gap-4 text-[#36384e]">
                    <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#ff6257]">
                      <CheckIcon size={16} className="text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <FormNewsletter />
          </div>
        </Card>
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
