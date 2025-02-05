import imageCard from '@/assets/2-blog-preview/illustration-article.svg'
import avatar from '@/assets/2-blog-preview/image-avatar.webp'
import { Footer } from '@/components/footer'
import { container, item } from '@/components/shared/_animate'
import {
  MotionCard,
  MotionCardDescription,
  MotionCardFooter,
  MotionCardTitle,
  MotionImage,
} from '@/components/shared/_components/motion-qr-code'
import { CardHeader } from '@/components/ui/card'
import { figtree } from '@/fonts/font'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'

const BlogPreviewCardPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4D04E] p-7">
      <main className="flex flex-1 items-center justify-center">
        <MotionCard
          variants={container}
          initial={'hidden'}
          animate={'show'}
          whileHover={'hover'}
          className={`${figtree.className} w-full max-w-sm space-y-6 border border-black p-6 leading-[150%] shadow-[8px_8px_0_0_rgba(0,0,0,1)] shadow-black`}
        >
          <MotionImage
            variants={item.scale}
            src={imageCard}
            alt="Image"
            className="h-[12.5rem] w-full rounded-md object-cover"
          />
          <CardHeader className="space-y-3 overflow-hidden p-0">
            <motion.span
              variants={item.translateYDown}
              className="w-fit rounded-sm bg-[#F4D04E] object-contain px-3 py-1 font-extrabold text-sm"
            >
              Learning
            </motion.span>
            <motion.span variants={item.opacity} className="font-medium text-sm">
              Published 21 Dec 2023
            </motion.span>
            <Link href={'#'}>
              <MotionCardTitle
                variants={item.translateXRight}
                className="font-extrabold text-2xl transition-colors hover:text-[#F4D04E]"
              >
                HTML & CSS foundations
              </MotionCardTitle>
            </Link>
            <MotionCardDescription variants={item.translateXLeft} className="font-medium text-base">
              These languages are the backbone of every website, defining structure, content, and
              presentation.
            </MotionCardDescription>
          </CardHeader>
          <MotionCardFooter variants={item.translateYUp} className="overflow-hidden p-0">
            <Image src={avatar} alt="Avatar" className="rounded-full" width={32} height={32} />
            <span className="ml-3 font-extrabold text-sm">Greg Hooper</span>
          </MotionCardFooter>
        </MotionCard>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPreviewCardPage
