import avatar from '@/assets/3-social-profile/avatar-jessica.jpeg'
import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { inter } from '@/fonts/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Desafio 3',
}

const SocialProfilePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#141414] p-6">
      <main className="flex w-full flex-1 items-center justify-center ">
        <MotionSlot asChild staggerConfig={{ staggerChildren: 0.4 }}>
          <Card
            className={`${inter.className} w-full max-w-sm space-y-6 border-none bg-[#1f1f1f] p-10 `}
          >
            <MotionSlot asChild offset={100} isNested staggerConfig={{ staggerChildren: 0.2 }}>
              <CardHeader className="items-center space-y-0 p-0">
                <MotionSlot asChild isNested scaleEffect initialScale={0.75}>
                  <Image
                    className="mb-6 rounded-full"
                    src={avatar}
                    alt="Avatar"
                    width={90}
                    height={90}
                  />
                </MotionSlot>
                <CardTitle className="mb-1 font-semibold text-2xl text-white">
                  Sarah Randall
                </CardTitle>
                <CardDescription className="!mb-6 font-semibold text-[#c5f82a] text-sm">
                  London, United Kingdom
                </CardDescription>
                <p className="font-medium text-muted-foreground text-sm">
                  “Front-end developer and avid reader.”
                </p>
              </CardHeader>
            </MotionSlot>
            <MotionSlot asChild isNested staggerConfig={{ staggerChildren: 0.2 }}>
              <CardContent className="flex flex-col gap-4 p-0">
                <Socials />
              </CardContent>
            </MotionSlot>
          </Card>
        </MotionSlot>
      </main>
      <Footer />
    </div>
  )
}

const socialsLinks = ['Github', 'Frontend Mentor', 'Linkedin', 'Twiiter', 'Instagram']

const Socials = () => {
  return socialsLinks.map(link => {
    return (
      <MotionSlot
        asChild
        key={link}
        isNested
        scaleEffect
        initialScale={0.75}
        whileHover={{ scale: 1.1 }}
      >
        <Link
          href={'#'}
          className={cn(
            buttonVariants({}),
            'h-11 bg-[#333333] hover:bg-[#c5f82a] hover:text-[#141414]'
          )}
        >
          {link}
        </Link>
      </MotionSlot>
    )
  })
}

export default SocialProfilePage
