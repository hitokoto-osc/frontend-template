import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import { useRoutes } from './router'

// load main stylesheet
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '~/assets/styles/scss/main.scss'
import type { UserModule } from '~/types'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: useRoutes(), base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob('./modules/*.ts', { eager: true })).forEach(
      (i) => (i as { install: UserModule })?.install?.(ctx)
    )
  }
)
