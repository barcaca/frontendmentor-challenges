import logo from '@/assets/11-tip-calculator/logo.svg'
import { Footer } from '@/components/footer'
import { spacemono } from '@/fonts/font'
import Image from 'next/image'
import FormTip from './_components/form-tip'

const TipCalculatorPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#c5e4e7] py-6 lg:p-6">
      <main
        className={`flex flex-1 flex-col items-center justify-center gap-20 ${spacemono.className}`}
      >
        <Image src={logo} alt="logo" width={100} height={100} />
        <FormTip />
      </main>
      <Footer />
    </div>
  )
}

export default TipCalculatorPage
