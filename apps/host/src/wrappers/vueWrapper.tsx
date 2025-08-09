import { useEffect, useRef } from 'react'
import { createApp, h } from 'vue'

export default function VueWrapper({ component, props = {} } : { component: any, props?: Record<string, any> }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if(!component) return;

    const app = createApp({
      render() {
        return h(component, props)
      }
    })
    app.mount(containerRef.current ?? '')

    return () => app.unmount()
  }, [component, props])

  return <div ref={containerRef}></div>
}
