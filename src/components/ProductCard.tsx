import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div role="listitem" className="flex w-full flex-col items-center px-2 py-6 text-center">
      <img
        loading="lazy"
        src={product.image}
        srcSet={product.imageSrcSet}
        sizes="(max-width: 767px) 90vw, (max-width: 991px) 40vw, 220px"
        alt={product.name}
        className="mb-3 aspect-[6/5] w-full max-w-[300px] object-contain"
      />
      <div className="text-base font-medium">{product.name}</div>
    </div>
  )
}
