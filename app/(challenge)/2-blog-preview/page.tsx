import imageCard from '@/assets/2-blog-preview/illustration-article.svg'
import avatar from '@/assets/2-blog-preview/image-avatar.webp'
import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { figtree } from '@/fonts/font'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Desafio 2',
}

const BlogPreviewCardPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4D04E] p-7">
      <main className="flex flex-1 items-center justify-center">
        <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2, when: 'beforeChildren' }}>
          <Card
            className={`${figtree.className} w-full max-w-sm space-y-6 border border-black p-6 leading-[150%] shadow-[8px_8px_0_0_rgba(0,0,0,1)] shadow-black`}
          >
            <MotionSlot asChild isNested scaleEffect initialScale={0.75}>
              <Image
                src={imageCard}
                alt="Image"
                className="h-[12.5rem] w-full rounded-md object-cover"
              />
            </MotionSlot>
            <CardHeader className="space-y-3 overflow-hidden p-0">
              <MotionSlot asChild isNested>
                <span className="w-fit rounded-sm bg-[#F4D04E] object-contain px-3 py-1 font-extrabold text-sm">
                  Learning
                </span>
              </MotionSlot>
              <MotionSlot asChild isNested>
                <span className="font-medium text-sm">Published 21 Dec 2023</span>
              </MotionSlot>
              <Link href={'#'}>
                <MotionSlot asChild isNested direction="right">
                  <CardTitle className="font-extrabold text-2xl transition-colors hover:text-[#F4D04E]">
                    HTML & CSS foundations
                  </CardTitle>
                </MotionSlot>
              </Link>
              <MotionSlot asChild isNested direction="left">
                <CardDescription className="font-medium text-base">
                  These languages are the backbone of every website, defining structure, content,
                  and presentation.
                </CardDescription>
              </MotionSlot>
            </CardHeader>
            <MotionSlot asChild isNested direction="up">
              <CardFooter className="overflow-hidden p-0">
                <Image src={avatar} alt="Avatar" className="rounded-full" width={32} height={32} />
                <span className="ml-3 font-extrabold text-sm">Greg Hooper</span>
              </CardFooter>
            </MotionSlot>
          </Card>
        </MotionSlot>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPreviewCardPage
