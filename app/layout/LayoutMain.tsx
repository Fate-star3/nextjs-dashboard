export interface MainProps {
  className?: string
  children: React.ReactNode
}

export default function LayoutMain({ className = '', children }: MainProps) {
  return (
    <main className={'flex flex-grow items-center justify-center bg-white'}>
      <div className={'container mx-auto mt-[4.5rem] h-full py-4 ' + className}>
        {children}
      </div>
    </main>
  )
}
