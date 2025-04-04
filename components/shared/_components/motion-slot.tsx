'use client'

import { Slot } from '@radix-ui/react-slot'
import { motion, type MotionProps, type Variants } from 'motion/react'
import { AnimationBuilder } from '../_animate'

const MotionEl = motion.create(Slot)

interface MotionSlotProps extends MotionProps {
  // Children configuration
  children: React.ReactNode
  asChild?: boolean
  isNested?: boolean
  className?: string

  // Animation controls
  fade?: boolean
  direction?: 'left' | 'right' | 'up' | 'down' | 'none'
  offset?: number
  durationIn?: number
  durationOut?: number
  scaleEffect?: boolean
  initialScale?: number

  // Stagger controls
  staggerConfig?: {
    delayChildren?: number
    staggerChildren?: number
    staggerDirection?: -1 | 1
    when?: 'beforeChildren' | 'afterChildren'
  }

  // Viewport detection
  viewportOptions?: {
    once?: boolean
    margin?: string
    amount?: 'some' | 'all' | number
  }

  // Advanced customization
  customVariants?: Variants
}

const MotionSlot = ({
  children,
  asChild,
  isNested,
  className,
  // Animation defaults
  fade = true,
  direction = 'down',
  offset = 24,
  durationIn = 0.4,
  durationOut = 0.3,
  scaleEffect = false,
  initialScale = 1,
  // Stagger configuration
  staggerConfig,
  // Viewport detection
  viewportOptions = { once: true, margin: '-50px' },
  // Customization
  customVariants,
  ...props
}: MotionSlotProps) => {
  const Component = asChild ? MotionEl : motion.div

  const animationBuilder = new AnimationBuilder()
    .setInitial({
      opacity: fade ? 0 : 1,
      ...(direction !== 'none' && {
        [direction === 'left' || direction === 'right' ? 'x' : 'y']:
          direction === 'right' || direction === 'down' ? -offset : offset,
      }),
      ...(scaleEffect && { scale: initialScale }),
    })
    .setAnimate(
      {
        opacity: 1,
        ...(direction !== 'none' && {
          [direction === 'left' || direction === 'right' ? 'x' : 'y']: 0,
        }),
        ...(scaleEffect && { scale: 1 }),
      },
      {
        duration: durationIn,
        ease: 'easeOut',
        ...staggerConfig,
      }
    )
    .setExit({
      opacity: fade ? 0 : 1,
      ...(scaleEffect && { scale: initialScale }),
    })

  const variants = customVariants || animationBuilder.build().variants

  const baseProps = {
    variants,
    className,
    ...props,
  }

  if (isNested) {
    return <Component {...baseProps}>{children}</Component>
  }

  return (
    <Component
      {...baseProps}
      initial="initial"
      whileInView={'animate'}
      viewport={viewportOptions}
      exit={'initial'}
    >
      {children}
    </Component>
  )
}

MotionSlot.displayName = 'MotionSlot'

export default MotionSlot
