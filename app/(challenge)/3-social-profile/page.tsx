import avatar from '@/assets/3-social-profile/avatar-jessica.jpeg'
import { Footer } from '@/components/footer'
import { container, item } from '@/components/shared/_animate'
import {
  MotionCard,
  MotionCardContent,
  MotionCardDescription,
  MotionCardTitle,
  MotionImage,
  MotionLink,
} from '@/components/shared/_components/motion-qr-code'
import { buttonVariants } from '@/components/ui/button'
import { CardHeader } from '@/components/ui/card'
import { inter } from '@/fonts/font'
import { cn } from '@/lib/utils'
import * as motion from 'motion/react-client'

const SocialProfilePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#141414] p-6">
      <main className="flex w-full flex-1 items-center justify-center ">
        <MotionCard
          variants={container}
          initial={'hidden'}
          animate={'show'}
          className={`${inter.className} w-full max-w-sm space-y-6 border-none bg-[#1f1f1f] p-10`}
        >
          <CardHeader className="items-center space-y-0 p-0">
            <MotionImage
              variants={item.scale}
              className="mb-6 rounded-full"
              src={avatar}
              alt="Avatar"
              width={90}
              height={90}
            />
            <MotionCardTitle
              variants={item.translateXLeft}
              className="mb-1 font-semibold text-2xl text-white"
            >
              Sarah Randall
            </MotionCardTitle>
            <MotionCardDescription
              variants={item.translateXRight}
              className="!mb-6 font-semibold text-[#c5f82a] text-sm"
            >
              London, United Kingdom
            </MotionCardDescription>
            <motion.p
              variants={item.translateYUp}
              className="font-medium text-muted-foreground text-sm"
            >
              “Front-end developer and avid reader.”
            </motion.p>
          </CardHeader>
          <MotionCardContent
            variants={container}
            initial={'hidden'}
            animate={'show'}
            className="flex flex-col gap-4 p-0"
          >
            <Socials />
          </MotionCardContent>
        </MotionCard>
      </main>
      <Footer />
    </div>
  )
}

const socialsLinks = ['Github', 'Frontend Mentor', 'Linkedin', 'Twiiter', 'Instagram']

const linkAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const Socials = () => {
  return socialsLinks.map(link => {
    return (
      <MotionLink
        variants={linkAnimation}
        whileHover={{ scale: 1.1 }}
        key={link}
        href={'#'}
        className={cn(
          buttonVariants({}),
          'h-11 bg-[#333333] hover:bg-[#c5f82a] hover:text-[#141414]'
        )}
      >
        {link}
      </MotionLink>
    )
  })
}

export default SocialProfilePage
