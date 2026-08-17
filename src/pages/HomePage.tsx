import { useEffect, useState } from 'react'
import { ASSETS, SITE } from '../data/assets'
import { featuredProducts } from '../data/products'
import { ButtonLink } from '../components/Button'
import { Hero } from '../components/Hero'
import { ProductCard } from '../components/ProductCard'

const storyImages = [
  {
    src: ASSETS.homeAboutImage,
    srcSet: ASSETS.homeAboutImageSrcSet,
    alt: 'Fresh produce from Denald Export',
  },
  {
    src: '/images/site/peaches-home-page.jpg',
    alt: 'Fresh peaches in a crate',
  },
  {
    src: '/images/site/cabbage-home-page.jpg',
    alt: 'Fresh cabbage in a crate',
  },
  {
    src: '/images/site/watermelon-homepage.jpg',
    alt: 'Fresh mandarins in a crate',
  }
] as const

export function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % storyImages.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [])
  return (
    <>
      <Hero title="From The Field, To The Market" image={ASSETS.backgrounds.home} height="home">
        <p className="mb-8 text-lg sm:text-xl text-hero-text/95">Connecting Fresh Products With Global Markets</p>
        <ButtonLink to="/about" variant="secondary" className="shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          Learn More
        </ButtonLink>
      </Hero>

      <div className="mx-auto max-w-[1140px] px-5 py-18 md:px-8 md:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center" data-aos="fade-up">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-ink/60">
            What we believe in
          </p>
          <p className="text-display font-normal tracking-[-0.04em] text-ink">{SITE.motto}</p>
        </div>

        <div className="mb-16 h-px w-full bg-black/10" />

        <div className="mb-20 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div data-aos="fade-right">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-ink/60">About</p>
            <h2 className="mb-4 text-4xl font-normal leading-tight tracking-[-0.04em] text-ink">
              Who we are
            </h2>
            <p className="mb-8 max-w-xl text-base leading-8 text-ink/70">
              We are a trusted exporter of premium-quality fruits and vegetables, committed to
              delivering freshness, taste, and nutrition across international markets. With strong
              partnerships with local growers and a passion for excellence, we ensure that every
              product meets the highest standards from farm to table.
            </p>
            
          </div>
          <div className="relative overflow-hidden rounded-[20px] border border-black/5 bg-white shadow-[0_20px_55px_rgba(15,23,42,0.08)]" data-aos="fade-left">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {storyImages.map((image) => (
                <div key={image.src} className="min-w-full">
                  <img
                    src={image.src}
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 49vw, 50vw"
                    alt={image.alt}
                    className="h-[320px] w-full object-cover md:h-[420px]"
                  />
                </div>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {storyImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={[
                    'h-2.5 rounded-full transition-all duration-300',
                    activeSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/60',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mx-4 mb-16 bg-surface-muted px-4 py-16 md:mx-8 md:px-8 md:py-20" data-aos="fade-up">
        <div className="mx-auto max-w-[1140px] text-center">
          <h2 className="mb-10 text-display font-normal tracking-[-0.04em]">Our Most Featured Products</h2>
          <div
            role="list"
            className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                data-aos="zoom-in"
                data-aos-delay="100"
                className="rounded-[20px] border border-black/5 bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(15,23,42,0.08)]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <ButtonLink to="/products/allproducts" variant="jumbo">
            View ALL
          </ButtonLink>
        </div>
      </section>

      <section
        className="mx-4 mb-0 bg-cover bg-center px-8 py-20 md:mx-8 md:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(1,1,1,0.24), rgba(1,1,1,0.24)), url(${ASSETS.backgrounds.cta})`,
        }}
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-3xl text-center text-hero-text" data-aos="fade-up">
          <h2 className="mb-4 text-display font-semibold tracking-[-0.04em]">Our Products</h2>
          <p className="text-xl font-semibold">Fresh. Healthy. High-Quality.</p>
          <p className="mt-3 text-lg text-hero-text/90">
            We offer a wide variety of seasonal and year-round fruits and vegetables, carefully
            selected and packed to preserve freshness during transport.
          </p>
        </div>
      </section>
    </>
  )
}
