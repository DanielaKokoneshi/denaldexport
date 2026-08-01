import { ASSETS } from '../data/assets'
import { vegetableProducts } from '../data/products'
import { CategoryProductsPage } from './CategoryProductsPage'

export function VegetablesPage() {
  return (
    <CategoryProductsPage
      title="Vegetables"
      heading="Our Vegetables"
      description="Explore our premium selection of fresh vegetables, carefully grown and harvested at peak quality. We deliver consistent freshness, reliable supply, and export-ready standards — making us a trusted partner for importers, distributors, and retailers worldwide."
      products={vegetableProducts}
      image={ASSETS.backgrounds.vegetables}
    />
  )
}
