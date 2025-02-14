import avatar from '@/assets/8-article-preview/avatar-michelle.jpg'
import Image from 'next/image'

const ArticleMetadata = () => {
  return (
    <div className="flex items-center gap-3">
      <Image className="rounded-full" src={avatar} alt="avatar" width={42} height={42} />
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-[#48556a] text-[13px]">Michelle Appleton</span>
        <span className="text-[13px] opacity-70">28 Jun 2020</span>
      </div>
    </div>
  )
}

export default ArticleMetadata
