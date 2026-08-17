import { useEffect } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import AOS from 'aos'
import { ASSETS } from '../data/assets'
import {
  allProducts,
  allProductsTotalPages,
  getAllProductsPage,
} from '../data/products'
import { Hero } from '../components/Hero'
import { ProductCard } from '../components/ProductCard'
import { ProductsPagination } from '../components/ProductsPagination'

export function AllProductsPage() {
  const [searchParams] = useSearchParams()
  const raw = searchParams.get('page')
  const parsed = raw === null || raw === '' ? 1 : Number(raw)
  const page = Number.isFinite(parsed) && parsed >= 1 ? Math.floor(parsed) : NaN

  useEffect(() => {
    AOS.refreshHard()
    // Scroll to top only on mobile devices
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        window.scrollTo(0, 0)
      }else {
        window.scrollTo(0, 700)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [page])

  if (!Number.isFinite(page) || page < 1 || page > allProductsTotalPages) {
    return <Navigate to="/products/allproducts" replace />
  }

  if (page === 1 && raw !== null) {
    return <Navigate to="/products/allproducts" replace />
  }


  // On mobile, show all products; on desktop, show paginated products
  const products = window.innerWidth < 768 ? allProducts :  getAllProductsPage(page) 

  return (
    <>
      <Hero
      
        title="All Products"
        image={ASSETS.backgrounds.products}
        overlay="rgba(0,0,0,0.2)"
     
        
      />

      <section className="mx-auto max-w-[1140px] px-5 pb-20 md:px-8">
        <div className="mb-10 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl font-normal">Our Products</h2>
          <p className="mx-auto max-w-3xl text-xs font-medium uppercase tracking-wide text-ink/60">
            Discover our full selection of premium fruits and vegetables, grown with care and
            harvested at peak freshness. We deliver reliable quality and taste, making us the trusted
            choice for importers, distributors, and retailers worldwide.
          </p>
        </div>

        <div role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="zoom-in"
              data-aos-delay={`${index * 50}`}
              className="rounded-[20px] border border-black/5 bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(15,23,42,0.08)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Only show pagination on desktop (md and up) */}
        <div className="hidden md:block">
          <ProductsPagination page={page} totalPages={allProductsTotalPages} />
        </div>
      </section>
    </>
  )
}
