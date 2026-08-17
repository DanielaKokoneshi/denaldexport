import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { AllProductsPage } from './pages/AllProductsPage'
import { ContactPage } from './pages/ContactPage'
import { FruitsPage } from './pages/FruitsPage'
import { HomePage } from './pages/HomePage'
import { VegetablesPage } from './pages/VegetablesPage'

function LegacyAllProductsPageRedirect() {
  const { page } = useParams()
  const parsed = Number(page)
  const to =
    Number.isFinite(parsed) && parsed > 1
      ? `/products/allproducts?page=${Math.floor(parsed)}`
      : '/products/allproducts'
  return <Navigate to={to} replace />
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="products/allproducts" element={<AllProductsPage />} />
          <Route
            path="products/allproducts/page/:page"
            element={<LegacyAllProductsPageRedirect />}
          />
          <Route path="products/vegetables" element={<VegetablesPage />} />
          <Route path="products/fruits" element={<FruitsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
