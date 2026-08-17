import { useEffect } from 'react'
import AOS from 'aos'
import type { Product } from '../data/products'
import { Hero } from '../components/Hero'
import { ProductCard } from '../components/ProductCard'

type CategoryProductsPageProps = {
  title: string
  heading: string
  description: string
  products: Product[]
  image: string
}

export function CategoryProductsPage({
  title,
  heading,
  description,
  products,
  image,
}: CategoryProductsPageProps) {
  useEffect(() => {
    AOS.refreshHard()
    // Scroll to top only on mobile devices
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        window.scrollTo(0, 0)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [title])

  return (
    <>
      <Hero title={title} image={image} height="home" overlay="rgba(0,0,0,0.2)" />

      <section className="mx-auto max-w-[1140px] px-5 pb-20 md:px-8">
        <div className="mb-10 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl font-normal">{heading}</h2>
          <p className="mx-auto max-w-3xl text-xs font-medium uppercase tracking-wide text-ink/60">
            {description}
          </p>
        </div>

        <div role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={product.id} data-aos="zoom-in" data-aos-delay={`${index * 50}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
