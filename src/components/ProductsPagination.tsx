import { Link } from 'react-router-dom'

type ProductsPaginationProps = {
  page: number
  totalPages: number
}

function pageHref(page: number) {
  return page <= 1 ? '/products/allproducts' : `/products/allproducts?page=${page}`
}

const pageButtonClass =
  'inline-flex h-[50px] w-[200px] items-center justify-center gap-2 bg-brand text-[15px] font-medium uppercase tracking-[2px] text-white transition-colors duration-300 hover:bg-brand-hover'

export function ProductsPagination({ page, totalPages }: ProductsPaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div role="navigation" aria-label="List" className="mt-8 flex flex-wrap items-center justify-center gap-4">
      {page > 1 && (
        <Link to={pageHref(page - 1)} aria-label="Previous Page" className={pageButtonClass}>
          <svg
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path fill="none" stroke="currentColor" d="M8 10L4 6l4-4" />
          </svg>
          Previous
        </Link>
      )}
      {page < totalPages && (
        <Link to={pageHref(page + 1)} aria-label="Next Page" className={pageButtonClass}>
          Next
          <svg
            height="12"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            aria-hidden="true"
          >
            <path fill="none" stroke="currentColor" d="M4 2l4 4-4 4" />
          </svg>
        </Link>
      )}
    </div>
  )
}
