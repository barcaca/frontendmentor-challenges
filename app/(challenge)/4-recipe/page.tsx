import recipe from '@/assets/4-recipe/image-omelette.jpeg'
import { Footer } from '@/components/footer'
import { containerOpacity, item } from '@/components/shared/_animate'
import {
  MotionCard,
  MotionCardDescription,
  MotionCardTitle,
  MotionImage,
} from '@/components/shared/_components/motion-qr-code'
import { CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { outfit, young } from '@/fonts/font'
import * as motion from 'motion/react-client'
import ListItems from './_components/list-items'
import Nutrition from './_components/nutrition'
import { ingredientsItem, instructionsItem, preparationItems } from './data/data'

const RecipePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-rose-50 md:p-6">
      <main className="flex flex-1 items-center justify-center">
        <MotionCard
          variants={{
            hidden: { height: 0 },
            show: {
              height: 'auto',
              transition: {
                duration: 2,
                type: 'spring',
                bounce: 0,
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
          initial={'hidden'}
          animate={'show'}
          className="w-full max-w-screen-md space-y-6 overflow-hidden rounded-none md:rounded-md"
        >
          <div className="md:px-10 md:pt-10">
            <MotionImage
              variants={item.scale}
              initial={'hidden'}
              animate={'show'}
              className="w-full md:rounded-md"
              src={recipe}
              alt="Omelette"
              width={656}
              height={300}
            />
          </div>
          <CardHeader className="space-y-6 overflow-hidden md:px-10">
            <MotionCardTitle
              variants={item.translateYDown}
              className={`${young.className} text-4xl md:text-[40px]`}
            >
              Simple Omelette Recipe
            </MotionCardTitle>
            <MotionCardDescription variants={item.translateYUp} className={`${outfit.className}`}>
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten
              eggs cooked to perfection, optionally filled with your choice of cheese, vegetables,
              or meats.
            </MotionCardDescription>
          </CardHeader>
          <CardContent className="space-y-6 md:px-10 ">
            <motion.div
              variants={item.translateXLeft}
              className="space-y-4 rounded-md bg-rose-50 p-7"
            >
              <ListItems
                title="Preparation time"
                items={preparationItems}
                listType="unordered"
                type="item"
              />
            </motion.div>
            <motion.div
              variants={containerOpacity}
              initial={'hidden'}
              whileInView={'show'}
              className="space-y-4"
            >
              <ListItems
                title="Ingredients"
                items={ingredientsItem}
                listType="unordered"
                type="list"
              />
            </motion.div>
            <Separator />
            <motion.div
              variants={containerOpacity}
              initial={'hidden'}
              whileInView={'show'}
              className="space-y-4"
            >
              <ListItems
                title="Instructions"
                items={instructionsItem}
                listType="ordered"
                type="list"
              />
            </motion.div>
            <Separator />
            <Nutrition />
          </CardContent>
        </MotionCard>
      </main>
      <Footer />
    </div>
  )
}

export default RecipePage
