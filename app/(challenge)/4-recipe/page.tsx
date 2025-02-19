import recipe from '@/assets/4-recipe/image-omelette.jpeg'
import { Footer } from '@/components/footer'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { outfit, young } from '@/fonts/font'
import Image from 'next/image'
import ListItems from './_components/list-items'
import Nutrition from './_components/nutrition'
import { ingredientsItem, instructionsItem, preparationItems } from './data/data'

export const metadata = {
  title: 'Desafio 4',
}

const RecipePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-rose-50 md:p-6">
      <main className="flex flex-1 items-center justify-center">
        <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2, when: 'beforeChildren' }}>
          <Card className="w-full max-w-screen-md space-y-6 overflow-hidden rounded-none md:rounded-md">
            <div className="md:px-10 md:pt-10">
              <MotionSlot asChild isNested scaleEffect initialScale={0.75}>
                <Image
                  className="w-full md:rounded-md"
                  src={recipe}
                  alt="Omelette"
                  width={656}
                  height={300}
                />
              </MotionSlot>
            </div>
            <CardHeader className="space-y-6 overflow-hidden md:px-10">
              <MotionSlot asChild isNested>
                <CardTitle className={`${young.className} text-4xl md:text-[40px]`}>
                  Simple Omelette Recipe
                </CardTitle>
              </MotionSlot>
              <MotionSlot asChild isNested direction="up">
                <CardDescription className={`${outfit.className}`}>
                  An easy and quick dish, perfect for any meal. This classic omelette combines
                  beaten eggs cooked to perfection, optionally filled with your choice of cheese,
                  vegetables, or meats.
                </CardDescription>
              </MotionSlot>
            </CardHeader>
            <CardContent className="space-y-6 md:px-10 ">
              <MotionSlot
                asChild
                staggerConfig={{ staggerChildren: 0.2, when: 'beforeChildren' }}
                direction="left"
              >
                <div className="space-y-4 rounded-md bg-rose-50 p-7">
                  <ListItems
                    title="Preparation time"
                    items={preparationItems}
                    listType="unordered"
                    type="item"
                  />
                </div>
              </MotionSlot>
              <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2, delayChildren: 0.2 }}>
                <div className="space-y-4">
                  <ListItems
                    title="Ingredients"
                    items={ingredientsItem}
                    listType="unordered"
                    type="list"
                  />
                </div>
              </MotionSlot>
              <Separator />
              <MotionSlot asChild staggerConfig={{ staggerChildren: 0.2, delayChildren: 0.2 }}>
                <div className="space-y-4">
                  <ListItems
                    title="Instructions"
                    items={instructionsItem}
                    listType="ordered"
                    type="list"
                  />
                </div>
              </MotionSlot>
              <Separator />
              <Nutrition />
            </CardContent>
          </Card>
        </MotionSlot>
      </main>
      <Footer />
    </div>
  )
}

export default RecipePage
