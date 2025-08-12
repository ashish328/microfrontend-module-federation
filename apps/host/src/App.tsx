import { Suspense, useEffect, useState } from 'react'
import VueWrapper from './wrappers/vueWrapper'
import type { DefineComponent } from '@vue/runtime-core'
import Home from './pages/Home'
import './App.css'

// const ProductList = React.lazy(() => import('products/ProductsListing'))
// const VueApp = React.lazy(() => import('cart/src/App.vue')
// const CategoryList = React.lazy(() => import('categories/CategoryList'))

export default function App() {
  const [Cart, setCartComponent] = useState<DefineComponent | null>(null);

  useEffect(() => {
    import('cart/App').then(module => {
      setCartComponent(() => module.default)
    })
  }, [])
  return (
    <div>
      <Home />
      <Suspense fallback={<div>Loading Cart...</div>}>
        {Cart && <VueWrapper component={Cart} />}
      </Suspense>
    </div>
  )
}

