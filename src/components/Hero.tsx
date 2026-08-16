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
        'relative mb-8 sm:mb-16 flex items-center justify-center bg-cover bg-center lg:bg-fixed text-white',
        height === 'home' ? 'min-h-[300px] sm:min-h-[450px] lg:h-[620px]' : 'min-h-[250px] sm:min-h-[350px] lg:h-[480px]',
      ].join(' ')}
      style={{
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${image})`,
      }}
    >
      <div className="w-full max-w-[1140px] px-4 text-center">
        <h1 className="mb-2 sm:mb-4 text-2xl sm:text-4xl lg:text-jumbo font-semibold tracking-tight text-white">{title}</h1>
        {children}
      </div>
    </section>
  )
}
