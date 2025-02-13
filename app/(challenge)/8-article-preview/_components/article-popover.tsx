'use client'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Share2Icon } from 'lucide-react'
import React from 'react'
import ArticleMetadata from './article-metada'
import ArticleSocials from './article-socials'

const ArticlePopover = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <CardFooter
        className={`relative flex h-[67px] items-center justify-between gap-3 ${isOpen ? 'bg-[#48556a] lg:bg-inherit' : ''}`}
      >
        <div className="hidden lg:flex">
          <ArticleMetadata />
        </div>
        {isOpen ? (
          <div className="-translate-y-1/2 absolute top-1/2 right-1/2 flex translate-x-1/2 items-center gap-3">
            <ArticleSocials />
          </div>
        ) : (
          <div className="lg:hidden">
            <ArticleMetadata />
          </div>
        )}
        <PopoverTrigger asChild className={isOpen ? 'hidden lg:flex' : ''}>
          <Button
            size={'icon'}
            className="size-8 rounded-full bg-[#ecf2f8] text-[#48556a] hover:bg-[#48556a] hover:text-[#ecf2f8]"
          >
            <Share2Icon className="size-6" />
          </Button>
        </PopoverTrigger>
      </CardFooter>
      {isOpen && (
        <PopoverContent
          side="top"
          sideOffset={25}
          className="hidden items-center justify-center bg-[#48556a] lg:flex"
        >
          <div className="-bottom-2 absolute right-1/2 h-5 w-5 translate-x-1/2 rotate-45 bg-[#48556a]" />
          <ArticleSocials />
        </PopoverContent>
      )}
    </Popover>
  )
}

export default ArticlePopover
