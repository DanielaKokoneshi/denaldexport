import { useEffect } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { ASSETS } from '../data/assets'
import {
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
    window.scrollTo(0, 0)
  }, [page])

  if (!Number.isFinite(page) || page < 1 || page > allProductsTotalPages) {
    return <Navigate to="/products/allproducts" replace />
  }

  if (page === 1 && raw !== null) {
    return <Navigate to="/products/allproducts" replace />
  }

  const products = getAllProductsPage(page)

  return (
    <>
      <Hero
        title="All Products"
        image={ASSETS.backgrounds.products}
        overlay="rgba(0,0,0,0.2)"
      />

      <section className="mx-auto max-w-[1140px] px-5 pb-20 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-4xl font-normal">Our Products</h2>
          <p className="mx-auto max-w-3xl text-xs font-medium uppercase tracking-wide text-ink/60">
            Discover our full selection of premium fruits and vegetables, grown with care and
            harvested at peak freshness. We deliver reliable quality and taste, making us the trusted
            choice for importers, distributors, and retailers worldwide.
          </p>
        </div>

        <div role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <ProductsPagination page={page} totalPages={allProductsTotalPages} />
      </section>
    </>
  )
}
