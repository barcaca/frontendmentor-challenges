import { cn } from '@/lib/utils'
import React from 'react'

const BentoGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[400px] lg:grid-cols-6',
        className
      )}
      {...props}
    />
  )
)

const BentoCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative flex', className)} {...props} />
  )
)

export { BentoCard, BentoGrid }
