'use client'
import { item } from '@/components/shared/_animate'
import { MotionButton } from '@/components/shared/_components/motion-qr-code'
import { CardFooter } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Share2Icon } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
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
          <motion.div variants={item.opacity} className="hidden lg:flex">
            <ArticleMetadata />
          </motion.div>
          {isOpen ? (
            <motion.div
              key={'social'}
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}
              className="flex w-full items-center justify-center lg:hidden"
            >
              <ArticleSocials />
            </motion.div>
          ) : (
            <motion.div
              key={'metadada'}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="lg:hidden"
            >
              <ArticleMetadata />
            </motion.div>
          )}
          <PopoverTrigger asChild className={isOpen ? 'hidden lg:flex' : ''}>
            <MotionButton
              variants={item.scale}
              size={'icon'}
              className="size-8 rounded-full bg-[#ecf2f8] text-[#48556a] hover:bg-[#48556a] hover:text-[#ecf2f8]"
            >
              <Share2Icon className="size-6" />
            </MotionButton>
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
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <div className="-bottom-2 absolute right-1/2 h-5 w-5 translate-x-1/2 rotate-45 bg-[#48556a]" />
              <ArticleSocials />
            </motion.div>
          </PopoverContent>
        )}
      </AnimatePresence>
    </Popover>
  )
}

export default ArticlePopover
