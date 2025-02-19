import articleImage from '@/assets/8-article-preview/drawers.jpg'
import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { manrope } from '@/fonts/font'
import Image from 'next/image'
import ArticlePopover from './_components/article-popover'

export const metadata = {
  title: 'Desafio 8',
}

const ArticlePreviewPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#ecf2f8] p-6">
      <main className="flex flex-1 items-center justify-center">
        <MotionSlot
          staggerConfig={{ staggerChildren: 0.2 }}
          className={`flex max-w-[730px] flex-col overflow-hidden lg:flex-row ${manrope.className} space-y-0`}
          asChild
        >
          <Card>
            <CardHeader className="h-[200px] w-full p-0 lg:h-[280px] lg:max-w-[285px]">
              <MotionSlot asChild isNested direction="right">
                <Image
                  src={articleImage}
                  className="h-full w-full object-cover"
                  alt="drawers"
                  width={285}
                  height={280}
                />
              </MotionSlot>
            </CardHeader>
            <div className="flex flex-col justify-between space-y-4">
              <MotionSlot asChild isNested>
                <CardContent className="space-y-4 overflow-hidden px-8 pt-8 pb-0">
                  <MotionSlot asChild isNested>
                    <CardTitle className="font-semibold text-[#48556a] tracking-[0.3px] lg:text-xl">
                      Shift the overall look and feel by
                      <br /> adding these wonderful touches to furniture in your home
                    </CardTitle>
                  </MotionSlot>
                  <MotionSlot asChild isNested direction="up">
                    <CardDescription className="text-[#6d7f97] text-[13px]">
                      Ever been in a room and felt like something was missing? Perhaps it felt
                      slightly bare and uninviting. I’ve got some simple tips to help you make any
                      room feel complete.
                    </CardDescription>
                  </MotionSlot>
                </CardContent>
              </MotionSlot>
              <ArticlePopover />
            </div>
          </Card>
        </MotionSlot>
      </main>
      <Footer />
    </div>
  )
}

export default ArticlePreviewPage
