import { Footer } from '@/components/footer'
import { CardHeader } from '@/components/ui/card'
import { outfit } from '@/fonts/font'
import qrCode from '@/public/1-qr-code/image-qr-code.png'
import { container, item } from './_animate'
import {
  MotionCard,
  MotionCardDescription,
  MotionCardTitle,
  MotionImage,
} from './_components/motion-qr-code'

const QrCodePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-300 p-7">
      <main className="flex flex-1 items-center justify-center">
        <MotionCard
          variants={container}
          initial={'hidden'}
          animate={'show'}
          whileHover={'whileHover'}
          className="w-full max-w-xs space-y-6 p-4 pb-10"
        >
          <MotionImage
            variants={item.image}
            src={qrCode}
            alt="QR Code"
            width={288}
            height={288}
            className="rounded-md"
          />
          <CardHeader className={`${outfit.className} space-y-4 p-0 text-center`}>
            <MotionCardTitle
              variants={item.title}
              className="font-bold text-[22px] text-slate-900 leading-[1.2] tracking-normal"
            >
              Improve your front-end skills by building projects
            </MotionCardTitle>
            <MotionCardDescription
              variants={item.description}
              className="text-[15px] text-slate-500 leading-[1.4] tracking-[0.2px]"
            >
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next
              level
            </MotionCardDescription>
          </CardHeader>
        </MotionCard>
      </main>
      <Footer />
    </div>
  )
}

export default QrCodePage
