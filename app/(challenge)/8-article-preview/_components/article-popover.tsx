'use client'
import MotionSlot from '@/components/shared/_components/motion-slot'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Share2Icon } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import React from 'react'
import ArticleMetadata from './article-metada'
import ArticleSocials from './article-socials'

const ArticlePopover = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <AnimatePresence>
        <CardFooter
          className={`relative flex h-[67px] items-center justify-between gap-3 pb-0 ${isOpen ? 'bg-[#48556a] lg:bg-inherit' : ''}`}
        >
          <MotionSlot isNested className="hidden lg:flex">
            <ArticleMetadata />
          </MotionSlot>
          {isOpen ? (
            <MotionSlot
              key={'social'}
              direction="up"
              isNested
              className="flex w-full items-center justify-center lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ArticleSocials />
            </MotionSlot>
          ) : (
            <MotionSlot
              key={'metadata'}
              direction="up"
              isNested
              className="lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <ArticleMetadata />
            </MotionSlot>
          )}
          <PopoverTrigger asChild className={isOpen ? 'hidden lg:flex' : ''}>
            <MotionSlot asChild isNested>
              <Button
                size={'icon'}
                className="size-8 rounded-full bg-[#ecf2f8] text-[#48556a] hover:bg-[#48556a] hover:text-[#ecf2f8]"
              >
                <Share2Icon className="size-6" />
              </Button>
            </MotionSlot>
          </PopoverTrigger>
        </CardFooter>
        {isOpen && (
          <PopoverContent
            key={'popover'}
            side="top"
            sideOffset={25}
            className="hidden items-center justify-center bg-[#48556a] lg:flex"
            asChild
          >
            <MotionSlot scaleEffect initialScale={0} offset={0} durationIn={0.5} durationOut={1}>
              <div className="-bottom-2 absolute right-1/2 h-5 w-5 translate-x-1/2 rotate-45 bg-[#48556a]" />
              <ArticleSocials />
            </MotionSlot>
          </PopoverContent>
        )}
      </AnimatePresence>
    </Popover>
  )
}

export default ArticlePopover
