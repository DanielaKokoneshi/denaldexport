export type Product = {
  id: string
  name: string
  image: string
  imageSrcSet?: string
  category: 'fruit' | 'vegetable'
}

const PRODUCTS = '/images/products'

function productImage(
  id: string,
  name: string,
  category: Product['category'],
  ext: 'png' | 'webp',
  sizes: number[],
  fullWidth: number,
): Product {
  const base = `${PRODUCTS}/${id}`
  return {
    id,
    name,
    category,
    image: `${base}.${ext}`,
    imageSrcSet: [
      ...sizes.map((w) => `${base}-${w}.${ext} ${w}w`),
      `${base}.${ext} ${fullWidth}w`,
    ].join(', '),
  }
}

/** Full catalog in the same order as the static all-products pages. */
export const allProducts: Product[] = [
  productImage('kiwi', 'Kiwi', 'fruit', 'webp', [500, 800, 1080, 1600, 2000, 2600], 3072),
  productImage('eggplant', 'Eggplant', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('cucumber', 'Cucumber', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('pepper', 'Pepper', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('watermelon', 'Watermelon', 'fruit', 'png', [500, 800, 1080], 1536),
  productImage('zucchini', 'Zucchini', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('orange', 'Orange', 'fruit', 'webp', [500, 800, 1080, 1600, 2000, 2600], 3072),
  productImage('cabbage', 'Cabbage', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('carrot', 'Carrot', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('clementine', 'Clementine', 'fruit', 'png', [500, 800, 1080], 1536),
  productImage('melon', 'Melon', 'fruit', 'png', [500, 800, 1080], 1536),
  productImage('tomato', 'Tomato', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('french-beans', 'French beans', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('cauliflower', 'Cauliflower', 'vegetable', 'png', [500, 800, 1080], 1536),
]

/** Homepage featured grid — first page of the catalog. */
export const featuredProducts = allProducts.slice(0, 8)

const byId = Object.fromEntries(allProducts.map((product) => [product.id, product])) as Record<
  string,
  Product
>

/** Order matches the static vegetables page (Carrot is only on All Products). */
export const vegetableProducts: Product[] = [
  'eggplant',
  'cucumber',
  'pepper',
  'zucchini',
  'cabbage',
  'tomato',
  'french-beans',
  'cauliflower',
].map((id) => byId[id])

/** Order matches the static fruits page. */
export const fruitProducts: Product[] = [
  'kiwi',
  'watermelon',
  'orange',
  'clementine',
  'melon',
].map((id) => byId[id])

export const ALL_PRODUCTS_PAGE_SIZE = 8

export const allProductsTotalPages = Math.ceil(allProducts.length / ALL_PRODUCTS_PAGE_SIZE)

export function getAllProductsPage(page: number): Product[] {
  const safePage = Math.min(Math.max(page, 1), allProductsTotalPages)
  const start = (safePage - 1) * ALL_PRODUCTS_PAGE_SIZE
  return allProducts.slice(start, start + ALL_PRODUCTS_PAGE_SIZE)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return category === 'fruit' ? fruitProducts : vegetableProducts
}
