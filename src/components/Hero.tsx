import type { ReactNode } from 'react'

type HeroProps = {
  title: string
  image: string
  height?: 'home' | 'subpage'
  children?: ReactNode
  overlay?: string
}

export function Hero({
  title,
  image,
  height = 'subpage',
  children,
  overlay = 'rgba(0,0,0,0.1)',
}: HeroProps) {
  return (
    <section
      className={[
        'relative mb-16 flex items-center justify-center bg-cover bg-center bg-no-repeat text-white',
        height === 'home' ? 'h-[620px]' : 'h-[480px]',
      ].join(' ')}
      style={{
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${image})`,
      }}
    >
      <div className="w-[70%] max-w-[1140px] px-4 text-center">
        <h1 className="mb-4 text-jumbo font-normal tracking-tight text-white">{title}</h1>
        {children}
      </div>
    </section>
  )
}
