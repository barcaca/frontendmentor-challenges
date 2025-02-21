import { Footer } from '@/components/footer'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { rubik } from '@/fonts/font'
import CardActivity from './_components/card-activity'
import CardPerson from './_components/card-person'
import dataActivity from './_data/data.json'
import { addMetadataToActivities } from './_types/type'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const TimeTrackingPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const activitys = addMetadataToActivities(dataActivity)
  const type = ((await searchParams).type as 'daily' | 'weekly' | 'monthly') || 'daily'

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#0f1424] p-6">
      <main className="flex w-full flex-1 items-center justify-center">
        <BentoGrid
          className={`${rubik.className} w-full max-w-[1110px] gap-8 lg:auto-rows-[244px] lg:grid-cols-4`}
        >
          <CardPerson />
          {activitys.map(activity => {
            return (
              <BentoCard key={activity.title} className=" min-h-[160px]">
                <CardActivity item={activity} type={type} />
              </BentoCard>
            )
          })}
        </BentoGrid>
      </main>
      <Footer />
    </div>
  )
}

export default TimeTrackingPage
