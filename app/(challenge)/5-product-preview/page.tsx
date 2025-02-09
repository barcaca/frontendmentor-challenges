import cart from '@/assets/5-product-preview/icon-cart.svg'
import imageProduct from '@/assets/5-product-preview/image-product-desktop.jpg'
import { Footer } from '@/components/footer'
import { containerOpacity, item } from '@/components/shared/_animate'
import {
  MotionCard,
  MotionCardDescription,
  MotionCardFooter,
  MotionCardTitle,
  MotionImage,
} from '@/components/shared/_components/motion-qr-code'
import { Button } from '@/components/ui/button'
import { CardHeader } from '@/components/ui/card'
import { fraunces, montserrat } from '@/fonts/font'
import * as motion from 'motion/react-client'
import Image from 'next/image'

const ProductPreview = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f2ebe3] p-4">
      <main className="flex flex-1 items-center justify-center">
        <MotionCard
          variants={containerOpacity}
          initial={'hidden'}
          animate={'show'}
          className="flex w-full max-w-[600px] flex-col overflow-hidden text-[#6c7289] md:flex-row"
        >
          <div className="h-60 w-full md:h-full">
            <MotionImage
              src={imageProduct}
              alt="Product"
              className="aspect-square h-full w-full object-cover md:aspect-auto"
              width={300}
              height={450}
            />
          </div>
          <div className={`w-full space-y-4 p-8 ${montserrat.className}`}>
            <CardHeader className="space-y-4 overflow-hidden p-0">
              <motion.h2 variants={item.opacity} className={'text-xs uppercase tracking-[5px]'}>
                Perfume
              </motion.h2>
              <MotionCardTitle
                variants={item.translateXLeft}
                className={`${fraunces.className} font-semibold text-[#1c232b] text-[32px] leading-none`}
              >
                Gabrielle Essence Eau De Parfum
              </MotionCardTitle>
              <MotionCardDescription variants={item.translateXRight} className="text-sm leading-5">
                A floral, solar and voluptuous interpretation composed by Olivier Polge,
                Perfumer-Creator for the House of CHANEL
              </MotionCardDescription>
            </CardHeader>
            <div className="flex items-center gap-5">
              <motion.span
                variants={item.opacity}
                className={`${fraunces.className} font-semibold text-[#3c8067] text-[32px]`}
              >
                $149.99
              </motion.span>
              <motion.span variants={item.scale} className="text-sm line-through">
                $169.99
              </motion.span>
            </div>
            <MotionCardFooter variants={item.translateYUp} className="p-0">
              <Button className="h-12 w-full bg-[#3c8067] hover:bg-[#2f6451]">
                <Image src={cart} alt="Cart" width={16} height={16} />
                Add to Cart
              </Button>
            </MotionCardFooter>
          </div>
        </MotionCard>
      </main>
      <Footer />
    </div>
  )
}

export default ProductPreview
