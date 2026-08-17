import { ASSETS, SITE } from '../data/assets'
import { featuredProducts } from '../data/products'
import { ButtonLink } from '../components/Button'
import { Hero } from '../components/Hero'
import { ProductCard } from '../components/ProductCard'

export function HomePage() {
  return (
    <>
      <Hero title="From The Field, To The Market" image={ASSETS.backgrounds.home} height="home">
        <p className="mb-8 text-xl text-hero-text">Connecting Fresh Products With Global Markets</p>
        <ButtonLink to="/about" variant="secondary">
          Learn More
        </ButtonLink>
      </Hero>

      <div className="mx-auto max-w-[1140px] px-5 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center" data-aos="fade-up">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-ink/60">
            What we believe in
          </p>
          <p className="text-display font-normal">{SITE.motto}</p>
        </div>

        <div className="mb-16 h-px w-full bg-black/10" />

        <div className="mb-20 grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div data-aos="fade-right">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-ink/60">About</p>
            <h2 className="mb-4 text-4xl font-normal leading-tight">Who we are</h2>
            <p className="mb-8 text-ink/70">
              We are a trusted exporter of premium-quality fruits and vegetables, committed to
              delivering freshness, taste, and nutrition across international markets. With strong
              partnerships with local growers and a passion for excellence, we ensure that every
              product meets the highest standards from farm to table.
            </p>
            <ButtonLink to="/about">Learn More</ButtonLink>
          </div>
          <img
            src={ASSETS.homeAboutImage}
            srcSet={ASSETS.homeAboutImageSrcSet}
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 49vw, 50vw"
            alt="Fresh produce from Denald Export"
            className="w-full object-cover"
            data-aos="fade-left"
          />
        </div>
      </div>

      <section className="mx-4 mb-16 bg-surface-muted px-4 py-16 md:mx-8 md:px-8" data-aos="fade-up">
        <div className="mx-auto max-w-[1140px] text-center">
          <h2 className="mb-10 text-display font-normal">Our Most Featured Products</h2>
          <div
            role="list"
            className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredProducts.map((product) => (
              <div key={product.id} data-aos="zoom-in" data-aos-delay="100">
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
        className="mx-4 mb-0 bg-cover bg-center px-8 py-24 md:mx-8"
        style={{
          backgroundImage: `linear-gradient(rgba(1,1,1,0.2), rgba(1,1,1,0.2)), url(${ASSETS.backgrounds.cta})`,
        }}
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-3xl text-center text-hero-text" data-aos="fade-up">
          <h2 className="mb-4 text-display font-semibold">Our Products</h2>
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
