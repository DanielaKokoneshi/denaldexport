import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ASSETS, CONTACT } from '../data/assets'
import { ExternalButton } from './Button'

const productLinks = [
  { to: '/products/allproducts', label: 'All Products' },
  { to: '/products/vegetables', label: 'Vegetables' },
  { to: '/products/fruits', label: 'Fruits' },
] as const

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    'block px-4 py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors lg:inline-block lg:px-5',
    isActive ? 'text-brand' : 'hover:text-brand',
  ].join(' ')
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location.pathname, location.search])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 991) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const productsActive = location.pathname.startsWith('/products')

  return (
    <header className="relative z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex px-[50px] items-center justify-between gap-4 px-5 py-5 lg:px-8">
        <Link to="/" aria-label="Denald Export home" className="shrink-0">
          <img src={ASSETS.logo} width={120} alt="Denald Export" className="h-auto w-[120px]" />
        </Link>

        <div className="flex items-center gap-3 lg:gap-6">
          <nav
            aria-label="Primary"
            className={[
              'absolute left-0 right-0 top-full z-50 bg-white shadow-lg lg:static lg:flex lg:items-center lg:shadow-none',
              menuOpen ? 'block' : 'hidden lg:flex',
            ].join(' ')}
          >
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => {
                if (window.innerWidth > 991) setDropdownOpen(true)
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 991) setDropdownOpen(false)
              }}
            >
              <button
                type="button"
                className={navLinkClass({ isActive: productsActive })}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                Our Products
              </button>
              <div
                className={[
                  'bg-white lg:absolute lg:left-0 lg:top-full lg:min-w-[180px] lg:border lg:border-black/5 lg:shadow-md',
                  dropdownOpen ? 'block' : 'hidden',
                ].join(' ')}
              >
                {productLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-3 text-left text-sm text-ink hover:bg-surface-muted hover:text-brand lg:text-left"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <button
            type="button"
            className="border-0 bg-transparent p-1 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <img src={ASSETS.menuIcon} width={22} alt="" />
          </button>
        </div>

        <ExternalButton href={CONTACT.mailto} className="hidden shrink-0 lg:inline-flex">
          Contact us
        </ExternalButton>
      </div>
    </header>
  )
}
