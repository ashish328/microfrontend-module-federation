// VueWrapper.tsx
import { useEffect, useRef } from 'react'
import { createApp, h } from 'vue'
import { createPinia, type Pinia } from 'pinia'

let pinia: Pinia | null = null

export default function VueWrapper({ component, props = {} }: { component: any, props?: Record<string, any> }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!component) return

    const app = createApp({
      render() {
        return h(component, props)
      },
    })

    if (!pinia) {
      pinia = createPinia()
    }
    app.use(pinia)

    app.mount(containerRef.current!)

    return () => {
      app.unmount()
    }
  }, [component, props])

  return <div ref={containerRef}></div>
}
