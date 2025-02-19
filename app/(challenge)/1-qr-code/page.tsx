import qrCode from '@/assets/1-qr-code/image-qr-code.png'
import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { outfit } from '@/fonts/font'
import Image from 'next/image'

export const metadata = {
  title: 'Desafio 1',
}

const QrCodePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-300 p-7">
      <main className="flex flex-1 items-center justify-center">
        <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2, when: 'beforeChildren' }}>
          <Card className="w-full max-w-xs space-y-6 p-4 pb-10">
            <MotionSlot asChild direction="up" isNested>
              <Image src={qrCode} alt="QR Code" width={288} height={288} className="rounded-md" />
            </MotionSlot>
            <CardHeader className={`${outfit.className} space-y-4 p-0 text-center`}>
              <MotionSlot asChild direction="left" isNested>
                <CardTitle className="font-bold text-[22px] text-slate-900 leading-[1.2] tracking-normal">
                  Improve your front-end skills by building projects
                </CardTitle>
              </MotionSlot>
              <MotionSlot asChild direction="right" isNested>
                <CardDescription className="text-[15px] text-slate-500 leading-[1.4] tracking-[0.2px]">
                  Scan the QR code to visit Frontend Mentor and take your coding skills to the next
                  level
                </CardDescription>
              </MotionSlot>
            </CardHeader>
          </Card>
        </MotionSlot>
      </main>
      <Footer />
    </div>
  )
}

export default QrCodePage
