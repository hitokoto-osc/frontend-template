/// <reference types="vite/client" />
/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any, @typescript-eslint/no-empty-interface */
declare interface Window {
  // extend the window
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Extends vite environment variables
interface ImportMetaEnv {
  readonly VITE_HUSKY?: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
