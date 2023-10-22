import { RouterOptions } from 'vite-ssg'
import type { RouteRecordRaw } from 'vue-router/auto'
// import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto/routes'

export function useRoutes(): RouteRecordRaw[] {
  return [...setupLayouts(routes)]
}

export default (): RouterOptions => {
  const options: RouterOptions = {
    routes: [...useRoutes()],
    base: import.meta.env.BASE_URL
  }
  return options
}
