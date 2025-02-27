'use client'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { overpass } from '@/fonts/font'
import { useState } from 'react'
import CardRating from './_components/card-rating'
import CardThanks from './_components/card-thank'

const RatingPage = () => {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleRating = (rating: number) => {
    setRating(rating)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }
  const handleReset = () => {
    setSubmitted(false)
    setRating(0)
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#121417] p-6">
      <main className="flex flex-1 items-center justify-center">
        <Card
          className={`relative w-full max-w-[412px] space-y-6 border-none bg-[#252d37] p-6 lg:space-y-8 lg:p-8 ${overpass.className}`}
        >
          {submitted ? (
            <CardThanks rating={rating} onReset={handleReset} />
          ) : (
            <CardRating rating={rating} onSubmit={handleSubmit} onRating={handleRating} />
          )}
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default RatingPage
