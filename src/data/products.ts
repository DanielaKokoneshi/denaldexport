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

/** Full catalog sorted alphabetically by name. */
export const allProducts: Product[] = [
  {
    id: 'broad-bean',
    name: 'Broad bean',
    category: 'vegetable',
    image: `${PRODUCTS}/broad-bean.png`,
    imageSrcSet: `${PRODUCTS}/broad-bean.png`,
  },
  productImage('cabbage', 'Cabbage', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('carrot', 'Carrot', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('cauliflower', 'Cauliflower', 'vegetable', 'png', [500, 800, 1080], 1536),
  {
    id: 'cherries',
    name: 'Cherry',
    category: 'fruit',
    image: `${PRODUCTS}/cherries.png`,
    imageSrcSet: `${PRODUCTS}/cherries.png`,
  },
  productImage('clementine', 'Tangerine', 'fruit', 'png', [500, 800, 1080], 1536),
  productImage('cucumber', 'Cucumber', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('eggplant', 'Eggplant', 'vegetable', 'png', [500, 800, 1080], 1536),
  {
    id: 'garlic',
    name: 'Garlic',
    category: 'vegetable',
    image: `${PRODUCTS}/garlic.png`,
    imageSrcSet: `${PRODUCTS}/garlic.png`,
  },
  {
    id: 'grape',
    name: 'Grape',
    category: 'fruit',
    image: `${PRODUCTS}/grape.png`,
    imageSrcSet: `${PRODUCTS}/grape.png`,
  },
  productImage('kiwi', 'Kiwi', 'fruit', 'webp', [500, 800, 1080, 1600, 2000, 2600], 3072),
  {
    id: 'leek',
    name: 'Leek',
    category: 'vegetable',
    image: `${PRODUCTS}/leek.png`,
    imageSrcSet: `${PRODUCTS}/leek.png`,
  },
  {
    id: 'lemon',
    name: 'Lemon',
    category: 'fruit',
    image: `${PRODUCTS}/lemon.png`,
    imageSrcSet: `${PRODUCTS}/lemon.png`,
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    category: 'vegetable',
    image: `${PRODUCTS}/lettuce.png`,
    imageSrcSet: `${PRODUCTS}/lettuce.png`,
  },
  productImage('melon', 'Melon', 'fruit', 'png', [500, 800, 1080], 1536),
  {
    id: 'onion',
    name: 'Onion',
    category: 'vegetable',
    image: `${PRODUCTS}/onion.png`,
    imageSrcSet: `${PRODUCTS}/onion.png`,
  },
  productImage('orange', 'Orange', 'fruit', 'webp', [500, 800, 1080, 1600, 2000, 2600], 3072),
  {
    id: 'peaches',
    name: 'Peach',
    category: 'fruit',
    image: `${PRODUCTS}/peaches-500.png`,
    imageSrcSet: `${PRODUCTS}/peaches-500.png`,
  },
  productImage('pepper', 'Pepper', 'vegetable', 'png', [500, 800, 1080], 1536),
  {
    id: 'potato',
    name: 'Potato',
    category: 'vegetable',
    image: `${PRODUCTS}/potato.png`,
    imageSrcSet: `${PRODUCTS}/potato.png`,
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    category: 'fruit',
    image: `${PRODUCTS}/strawberry.png`,
    imageSrcSet: `${PRODUCTS}/strawberry.png`,
  },
  {
    id: 'turnip',
    name: 'Turnip',
    category: 'vegetable',
    image: `${PRODUCTS}/turnip.png`,
    imageSrcSet: `${PRODUCTS}/turnip.png`,
  },
  productImage('tomato', 'Tomato', 'vegetable', 'png', [500, 800, 1080], 1536),
  productImage('watermelon', 'Watermelon', 'fruit', 'png', [500, 800, 1080], 1536),
  productImage('zucchini', 'Zucchini', 'vegetable', 'png', [500, 800, 1080], 1536),
]

/** Homepage featured grid — first page of the catalog. */
export const featuredProducts = allProducts.slice(0, 8)

const byId = Object.fromEntries(allProducts.map((product) => [product.id, product])) as Record<
  string,
  Product
>

/** Order matches the static vegetables page, sorted alphabetically. */
export const vegetableProducts: Product[] = [
  'broad-bean',
  'cabbage',
  'carrot',
  'cauliflower',
  'cucumber',
  'eggplant',
  'garlic',
  'leek',
  'lettuce',
  'onion',
  'pepper',
  'potato',
  'tomato',
  'turnip',
  'zucchini',
].map((id) => byId[id])

/** Order matches the static fruits page, sorted alphabetically. */
export const fruitProducts: Product[] = [
  'cherries',
  'clementine',
  'grape',
  'kiwi',
  'lemon',
  'melon',
  'orange',
  'peaches',
  'strawberry',
  'watermelon',
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
