'use client'
import { Footer } from '@/components/footer'
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
        {submitted ? (
          <CardThanks key={'thanks'} rating={rating} onReset={handleReset} />
        ) : (
          <CardRating
            key={'rating'}
            rating={rating}
            onSubmit={handleSubmit}
            onRating={handleRating}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default RatingPage
