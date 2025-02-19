import cart from '@/assets/5-product-preview/icon-cart.svg'
import imageProduct from '@/assets/5-product-preview/image-product-desktop.jpg'
import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { fraunces, montserrat } from '@/fonts/font'
import Image from 'next/image'

export const metadata = {
  title: 'Desafio 5',
}

const ProductPreview = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f2ebe3] p-4">
      <main className="flex flex-1 items-center justify-center">
        <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2 }}>
          <Card className="flex w-full max-w-[600px] flex-col overflow-hidden text-[#6c7289] md:flex-row">
            <MotionSlot offset={100} asChild isNested direction="right">
              <div className="w-full overflow-hidden md:h-full">
                <Image
                  src={imageProduct}
                  alt="Product"
                  className="aspect-video h-full w-full object-cover md:aspect-square"
                  width={300}
                  height={450}
                />
              </div>
            </MotionSlot>
            <div className={`w-full space-y-4 p-8 ${montserrat.className}`}>
              <MotionSlot asChild isNested direction="up">
                <CardHeader className="space-y-4 overflow-hidden p-0">
                  <h2 className={'text-xs uppercase tracking-[5px]'}>Perfume</h2>
                  <CardTitle
                    className={`${fraunces.className} font-semibold text-[#1c232b] text-[32px] leading-none`}
                  >
                    Gabrielle Essence Eau De Parfum
                  </CardTitle>
                  <CardDescription className="text-sm leading-5">
                    A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL
                  </CardDescription>
                </CardHeader>
              </MotionSlot>
              <MotionSlot isNested direction="left" className='className="flex items-center gap-5"'>
                <span className={`${fraunces.className} font-semibold text-[#3c8067] text-[32px]`}>
                  $149.99
                </span>
                <span className="text-sm line-through">$169.99</span>
              </MotionSlot>
              <CardFooter className="p-0">
                <MotionSlot
                  whileHover={{ scale: 1.1 }}
                  isNested
                  asChild
                  scaleEffect
                  initialScale={0.75}
                >
                  <Button className="h-12 w-full bg-[#3c8067] hover:bg-[#2f6451]">
                    <Image src={cart} alt="Cart" width={16} height={16} />
                    Add to Cart
                  </Button>
                </MotionSlot>
              </CardFooter>
            </div>
          </Card>
        </MotionSlot>
      </main>
      <Footer />
    </div>
  )
}

export default ProductPreview
