import calculatorSvg from '@/assets/6-four-card/icon-calculator.svg'
import karmaSvg from '@/assets/6-four-card/icon-karma.svg'
import supervisorSvg from '@/assets/6-four-card/icon-supervisor.svg'
import teamSvg from '@/assets/6-four-card/icon-team-builder.svg'
import { Footer } from '@/components/footer'
import { container, containerOpacity, item } from '@/components/shared/_animate'
import { MotionCard } from '@/components/shared/_components/motion-qr-code'
import { CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { poppins } from '@/fonts/font'
import { cn } from '@/lib/utils'
import * as motion from 'motion/react-client'
import Image from 'next/image'

export const cardsItems = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    icon: supervisorSvg,
    style: 'border-t-[#45d3d3] lg:row-span-2 lg:self-center',
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    icon: teamSvg,
    style: 'border-t-[#ea5353]',
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    icon: karmaSvg,
    style: 'border-t-[#fcaf4a] lg:order-4',
  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    icon: calculatorSvg,
    style: 'border-t-[#549ef2] lg:row-span-2 lg:self-center lg:order-3',
  },
]

const cardAnimation = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const FourCardPage = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-20 bg-[#fafafa] px-8 py-6 pt-20">
      <main className={`flex flex-1 flex-col items-center justify-center ${poppins.className}`}>
        <motion.div
          variants={containerOpacity}
          initial={'hidden'}
          animate={'show'}
          className="w-full max-w-6xl space-y-16"
        >
          <div className="flex w-full flex-col items-center space-y-4 text-center text-[#a3a5ae]">
            <motion.h1
              variants={item.translateYDown}
              className="font-light text-4xl text-[#4c4e61]"
            >
              Reliable, efficient delivery <br />{' '}
              <span className="font-semibold">Powered by Technology</span>
            </motion.h1>
            <motion.p
              variants={item.translateYUp}
              className="w-full max-w-prose text-[15px] leading-[1.6]"
            >
              Our Artificial Intelligence powered tools use millions of project data points to
              ensure that your project is successful
            </motion.p>
          </div>
          <motion.div
            variants={container}
            className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-8"
          >
            {cardsItems.map(({ title, description, icon, style }) => {
              return (
                <MotionCard
                  key={title}
                  variants={cardAnimation}
                  className={cn('h-full max-h-[250px] space-y-10 border-t-4 p-8', style)}
                >
                  <CardHeader className="space-y-2 p-0">
                    <CardTitle className="font-semibold text-[#4c4e61] text-xl">{title}</CardTitle>
                    <CardDescription className="text-[#a3a5ae] text-[13px] leading-[1.6]">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-0">
                    <Image className="ml-auto" src={icon} alt="Icon" width={64} height={64} />
                  </CardFooter>
                </MotionCard>
              )
            })}
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default FourCardPage
