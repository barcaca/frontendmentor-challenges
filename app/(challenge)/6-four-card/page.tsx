import calculatorSvg from '@/assets/6-four-card/icon-calculator.svg'
import karmaSvg from '@/assets/6-four-card/icon-karma.svg'
import supervisorSvg from '@/assets/6-four-card/icon-supervisor.svg'
import teamSvg from '@/assets/6-four-card/icon-team-builder.svg'
import { Footer } from '@/components/footer'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { poppins } from '@/fonts/font'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const cardsItems = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    icon: supervisorSvg,
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    icon: teamSvg,
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    icon: karmaSvg,
  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    icon: calculatorSvg,
  },
]

const FourCardPage = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-20 bg-[#fafafa] px-8 py-20">
      <main className={`flex flex-1 flex-col items-center justify-center ${poppins.className}`}>
        <div className="w-full max-w-6xl space-y-16">
          <div className="flex w-full flex-col items-center space-y-4 text-center text-[#a3a5ae]">
            <h1 className="font-light text-4xl text-[#4c4e61]">
              Reliable, efficient delivery <br />{' '}
              <span className="font-semibold">Powered by Technology</span>
            </h1>
            <p className="w-full max-w-prose text-[15px] leading-[1.6]">
              Our Artificial Intelligence powered tools use millions of project data points to
              ensure that your project is successful
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-8">
            {cardsItems.map(({ title, description, icon }, i) => {
              const gridPlace: Record<number, string> = {
                0: 'border-t-[#45d3d3] lg:row-span-2 lg:self-center',
                1: 'border-t-[#ea5353]',
                2: 'border-t-[#fcaf4a] lg:order-4',
                3: 'border-t-[#549ef2] lg:row-span-2 lg:self-center lg:order-3',
              }
              return (
                <Card
                  key={title}
                  className={cn('h-full max-h-[250px] space-y-10 border-t-4 p-8', gridPlace[i])}
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
                </Card>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FourCardPage
