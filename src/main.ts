import { ViteSSG } from 'vite-ssg'

import App from './App.vue'
import { useRoutes } from './router'

// load main stylesheet
import '~/assets/styles/scss/main.scss'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes: useRoutes(), base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
      i.install?.(ctx)
    )
  }
)
