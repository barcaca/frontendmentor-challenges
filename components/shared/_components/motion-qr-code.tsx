'use client'

import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { motion } from 'motion/react'
import Image from 'next/image'

export const MotionCard = motion.create(Card)
export const MotionCardTitle = motion.create(CardTitle)
export const MotionCardDescription = motion.create(CardDescription)
export const MotionCardFooter = motion.create(CardFooter)
export const MotionImage = motion.create(Image)
