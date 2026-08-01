import { ASSETS } from '../data/assets'
import { fruitProducts } from '../data/products'
import { CategoryProductsPage } from './CategoryProductsPage'

export function FruitsPage() {
  return (
    <CategoryProductsPage
      title="Fruits"
      heading="Our Fruits"
      description="Discover our range of high-quality fresh fruits, cultivated with attention to detail and picked at optimal ripeness. We ensure dependable availability, uniform standards, and export-grade handling — positioning us as a reliable supplier for importers, wholesalers, and retailers across international markets."
      products={fruitProducts}
      image={ASSETS.backgrounds.fruits}
    />
  )
}
