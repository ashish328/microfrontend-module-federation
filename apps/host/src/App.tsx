import React, { Suspense, useEffect, useState } from 'react'
import VueWrapper from './wrappers/vueWrapper'
import type { DefineComponent } from '@vue/runtime-core'

const ProductList = React.lazy(() => import('products/ProductsListing'))
// const VueApp = React.lazy(() => import('cart/src/App.vue')

export default function App() {
  const [Cart, setCartComponent] = useState<DefineComponent | null>(null);

  useEffect(() => {
    import('cart/App').then(module => {
      setCartComponent(() => module.default)
    })
  }, [])
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductList />
      </Suspense>
      <Suspense fallback={<div>Loading Cart...</div>}>
        {Cart && <VueWrapper component={Cart} />}
      </Suspense>
    </div>
  )
}

