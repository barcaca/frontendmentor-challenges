'use client'

import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

export const MotionCard = motion.create(Card)
export const MotionCardTitle = motion.create(CardTitle)
export const MotionCardDescription = motion.create(CardDescription)
export const MotionCardContent = motion.create(CardContent)
export const MotionCardFooter = motion.create(CardFooter)
export const MotionImage = motion.create(Image)
export const MotionLink = motion.create(Link)
