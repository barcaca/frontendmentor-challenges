import recipe from '@/assets/4-recipe/image-omelette.jpeg'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { outfit, young } from '@/fonts/font'
import Image from 'next/image'
import ListItems from './_components/list-items'
import Nutrition from './_components/nutrition'
import { ingredientsItem, instructionsItem, preparationItems } from './data/data'

const RecipePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-rose-50 md:p-6">
      <main className="flex flex-1 items-center justify-center">
        <Card className="w-full max-w-screen-md space-y-6 rounded-none md:rounded-md">
          <div className="md:px-10 md:pt-10">
            <Image
              className="w-full md:rounded-md"
              src={recipe}
              alt="Omelette"
              width={656}
              height={300}
            />
          </div>
          <CardHeader className="space-y-6 md:px-10">
            <CardTitle className={`${young.className} text-4xl md:text-[40px]`}>
              Simple Omelette Recipe
            </CardTitle>
            <CardDescription className={`${outfit.className}`}>
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten
              eggs cooked to perfection, optionally filled with your choice of cheese, vegetables,
              or meats.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 md:px-10 ">
            <div className="space-y-4 rounded-md bg-rose-50 p-7">
              <ListItems
                title="Preparation time"
                items={preparationItems}
                listType="unordered"
                type="item"
              />
            </div>
            <div className="space-y-4">
              <ListItems
                title="Ingredients"
                items={ingredientsItem}
                listType="unordered"
                type="list"
              />
            </div>
            <Separator />
            <div className="space-y-4">
              <ListItems
                title="Instructions"
                items={instructionsItem}
                listType="ordered"
                type="list"
              />
            </div>
            <Separator />
            <Nutrition />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default RecipePage
