import { ASSETS } from '../data/assets'
import { services } from '../data/services'
import { Hero } from '../components/Hero'

export function AboutPage() {
  return (
    <>
      <Hero title="About Us" image={ASSETS.backgrounds.about} />

      <div className="mx-auto max-w-[1140px] px-5 pb-8 md:px-8">
        <p className="mx-auto mb-10 max-w-4xl text-center text-display font-normal">
          We are a dedicated team of agricultural professionals committed to delivering high-quality
          fresh produce to markets around the world. From carefully cultivated fields to modern
          packing facilities, every step of our process is focused on quality, safety, and
          reliability.
        </p>

        <div className="mb-12 h-px w-full bg-black/10" />

        <div className="mb-12 grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <p className="text-ink/70">
            Based in a region known for its fertile land and ideal growing conditions, we work
            closely with experienced farmers to ensure consistent standards and sustainable
            production.
            <br />
            <br />
            Our fruits and vegetables are harvested at the right stage, handled with care, and
            prepared according to international export requirements.
          </p>
          <img
            src={ASSETS.aboutStoryImage1}
            srcSet={ASSETS.aboutStoryImage1SrcSet}
            sizes="(max-width: 479px) 100vw, 448px"
            alt="Fresh produce ready for packing"
            loading="lazy"
            className="mx-auto w-full max-w-[448px]"
          />
        </div>

        <div className="mb-12 h-px w-full bg-black/10" />

        <div className="mb-12 grid items-center gap-8 md:grid-cols-2 md:gap-16">
          <img
            src={ASSETS.aboutStoryImage2}
            srcSet={ASSETS.aboutStoryImage2SrcSet}
            sizes="(max-width: 479px) 100vw, 448px"
            alt="Mandarins from Denald Export"
            loading="lazy"
            className="mx-auto w-full max-w-[448px] md:order-1"
          />
          <p className="text-ink/70 md:order-2">
            With strong logistics coordination and attention to detail, we supply importers,
            distributors, and retailers with dependable shipments and competitive solutions.
            <br />
            <br />
            Our goal is simple: to build long-term partnerships through trust, transparency, and
            consistent performance in every delivery.
          </p>
        </div>

        <div className="mb-4 h-px w-full bg-black/10" />
      </div>

      <section className="bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1140px]">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ink/60">
              What we are best at
            </p>
            <h2 className="text-4xl font-normal">Our Services</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="text-left">
                <img src={service.icon} width={70} alt="" className="mb-4" />
                <h3 className="mb-2 text-xl font-normal">{service.title}</h3>
                <p className="text-ink/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
