import { RouterOptions } from 'vite-ssg'
import { RouteRecordRaw } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

export function useRoutes(): RouteRecordRaw[] {
  return [...setupLayouts([...generatedRoutes])]
}

export default (): RouterOptions => {
  const options: RouterOptions = {
    routes: [...useRoutes()],
    base: import.meta.env.BASE_URL
  }
  return options
}
