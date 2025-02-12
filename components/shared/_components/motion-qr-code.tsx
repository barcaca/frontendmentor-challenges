'use client'

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

export const MotionCard = motion.create(Card)
export const MotionCardHeader = motion.create(CardHeader)
export const MotionCardTitle = motion.create(CardTitle)
export const MotionCardDescription = motion.create(CardDescription)
export const MotionCardContent = motion.create(CardContent)
export const MotionCardFooter = motion.create(CardFooter)
export const MotionBentoGrid = motion.create(BentoGrid)
export const MotionBentoCard = motion.create(BentoCard)
export const MotionImage = motion.create(Image)
export const MotionLink = motion.create(Link)
