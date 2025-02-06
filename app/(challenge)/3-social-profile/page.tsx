import avatar from '@/assets/3-social-profile/avatar-jessica.jpeg'
import { Footer } from '@/components/footer'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { inter } from '@/fonts/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const SocialProfilePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#141414] p-6">
      <main className="flex w-full flex-1 items-center justify-center ">
        <Card
          className={`${inter.className} w-full max-w-sm space-y-6 border-none bg-[#1f1f1f] p-10`}
        >
          <CardHeader className="items-center space-y-0 p-0">
            <Image className="mb-6 rounded-full" src={avatar} alt="Avatar" width={90} height={90} />
            <CardTitle className="mb-1 font-semibold text-2xl text-white">Sarah Randall</CardTitle>
            <CardDescription className="!mb-6 font-semibold text-[#c5f82a] text-sm">
              London, United Kingdom
            </CardDescription>
            <p className="font-medium text-muted-foreground text-sm">
              “Front-end developer and avid reader.”
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-0">
            <Socials />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

const socialsLinks = ['Github', 'Frontend Mentor', 'Linkedin', 'Twiiter', 'Instagram']

const Socials = () => {
  return socialsLinks.map(social => {
    return (
      <Link
        key={social}
        href={'#'}
        className={cn(
          buttonVariants({}),
          'h-11 bg-[#333333] hover:bg-[#c5f82a] hover:text-[#141414]'
        )}
      >
        {social}
      </Link>
    )
  })
}

export default SocialProfilePage
