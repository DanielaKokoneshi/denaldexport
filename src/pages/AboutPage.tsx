import { useEffect, useState } from 'react'
import { ASSETS } from '../data/assets'
import { services } from '../data/services'
import { Hero } from '../components/Hero'

const storyImages = [
  {
    src: '/images/site/madarina-home-page.jpg',
    alt: 'Orange orchard in Denald Export fields',
  },
  {
    src: ASSETS.homeAboutImage,
    srcSet: ASSETS.homeAboutImageSrcSet,
    alt: 'Fresh produce from Denald Export',
  },
  {
    src: ASSETS.aboutStoryImage2,
    srcSet: ASSETS.aboutStoryImage2SrcSet,
    alt: 'Mandarins from Denald Export',
  },
] as const

export function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % storyImages.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <Hero title="About Us" image={ASSETS.backgrounds.about} />

      <div className="mx-auto max-w-[1140px] px-5 py-18 md:px-8 md:py-20">
        <div className="mb-20 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div data-aos="fade-right">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-ink/60">Who we are</p>
            <h2 className="mb-5 text-4xl font-normal leading-tight tracking-[-0.04em] text-ink">
              Growing trust from the field to the market
            </h2>
            <p className="max-w-xl text-base leading-8 text-ink/70">
              We are a dedicated team of agricultural professionals committed to bringing fresh,
              high-quality produce to markets around the world. From carefully cultivated fields to
              modern packing and export operations, every step is designed around quality,
              consistency, and long-term reliability.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: 'Freshness-first', text: 'Harvested at the right stage and handled with care.' },
                { title: 'Reliable supply', text: 'Consistent quality for importers, retailers, and distributors.' },
                { title: 'Responsible growing', text: 'Built around sustainable practice and trusted partnerships.' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[16px] border border-black/5 bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-ink/70">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-ink/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[22px] border border-black/5 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
            data-aos="fade-left"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {storyImages.map((image) => (
                <div key={image.src} className="min-w-full">
                  <img
                    src={image.src}
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 48vw, 50vw"
                    alt={image.alt}
                    className="h-[320px] w-full object-cover md:h-[430px]"
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
                    activeSlide === index ? 'w-8 bg-white' : 'w-2.5 bg-white/65',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16 h-px w-full bg-black/10" />

        <div className="mb-20 grid items-center gap-8 md:grid-cols-2 md:gap-16" data-aos-offset="300">
          <img
            src={ASSETS.aboutStoryImage1}
            srcSet={ASSETS.aboutStoryImage1SrcSet}
            sizes="(max-width: 479px) 100vw, 448px"
            alt="Fresh produce ready for packing"
            loading="lazy"
            className="mx-auto w-full max-w-[448px] rounded-[22px] object-cover shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:order-1"
            data-aos="fade-right"
          />
          <div className="md:order-2" data-aos="fade-left">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-ink/60">
              Our approach
            </p>
            <h3 className="mb-4 text-3xl font-normal tracking-[-0.03em] text-ink">
              Quality, care, and consistency in every shipment
            </h3>
            <p className="text-justify text-base leading-8 text-ink/70">
              Based in a region known for its fertile land and favorable growing conditions, we work
              closely with experienced farmers to maintain strong standards and sustainable
              production. Our fruits and vegetables are harvested at the right stage and handled with
              care to preserve their taste, freshness, and shelf life.
              <br />
              <br />
              With strong logistics coordination and deep attention to detail, we support importers,
              distributors, and retailers with dependable solutions tailored to international market
              needs. Our goal is simple: to build long-term partnerships through trust,
              transparency, and consistent performance in every delivery.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-white px-5 py-16 md:px-8" data-aos="fade-up">
        <div className="mx-auto max-w-[1140px]">
          <div className="mb-12 text-center" data-aos="fade-up">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-ink/60">
              What we are best at
            </p>
            <h2 className="text-4xl font-normal tracking-[-0.04em] text-ink">Our Services</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="rounded-[20px] border border-black/5 bg-surface-soft p-6 shadow-[0_18px_38px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                <img src={service.icon} width={70} alt="" className="mb-5" />
                <h3 className="mb-2 text-xl font-normal text-ink">{service.title}</h3>
                <p className="text-justify text-base leading-7 text-ink/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
