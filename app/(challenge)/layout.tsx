import BackButton from '@/components/shared/_components/back-button'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackButton />
      {children}
    </>
  )
}
