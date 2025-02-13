import articleImage from '@/assets/8-article-preview/drawers.jpg'
import { Footer } from '@/components/footer'
import { container, containerOpacity, item } from '@/components/shared/_animate'
import {
  MotionCard,
  MotionCardContent,
  MotionCardDescription,
  MotionCardTitle,
  MotionImage,
} from '@/components/shared/_components/motion-qr-code'
import { CardHeader } from '@/components/ui/card'
import { manrope } from '@/fonts/font'
import ArticlePopover from './_components/article-popover'

const ArticlePreviewPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#ecf2f8] p-6">
      <main className="flex flex-1 items-center justify-center">
        <MotionCard
          variants={container}
          initial={'hidden'}
          animate={'show'}
          className={`flex max-w-[730px] flex-col overflow-hidden lg:flex-row ${manrope.className} space-y-0`}
        >
          <CardHeader className="h-[200px] w-full p-0 lg:h-[280px] lg:max-w-[285px]">
            <MotionImage
              variants={item.translateXLeft}
              src={articleImage}
              className="h-full w-full object-cover"
              alt="drawers"
              width={285}
              height={280}
            />
          </CardHeader>
          <div className="flex flex-col justify-between space-y-4">
            <MotionCardContent
              variants={containerOpacity}
              className="space-y-4 overflow-hidden px-8 pt-8 pb-0"
            >
              <MotionCardTitle
                variants={item.translateYDown}
                className="font-semibold text-[#48556a] tracking-[0.3px] lg:text-xl"
              >
                Shift the overall look and feel by
                <br /> adding these wonderful touches to furniture in your home
              </MotionCardTitle>
              <MotionCardDescription
                variants={item.translateYUp}
                className="text-[#6d7f97] text-[13px]"
              >
                Ever been in a room and felt like something was missing? Perhaps it felt slightly
                bare and uninviting. I’ve got some simple tips to help you make any room feel
                complete.
              </MotionCardDescription>
            </MotionCardContent>
            <ArticlePopover />
          </div>
        </MotionCard>
      </main>
      <Footer />
    </div>
  )
}

export default ArticlePreviewPage
