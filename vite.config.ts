/// <reference types="vite-ssg" />
/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'

// Obfuscator
// 与 Vite-ssg 冲突，需要修复
// import obfuscator from 'rollup-plugin-obfuscator'
// import { ObfuscatorOptions } from 'javascript-obfuscator'

// Vite plugins
import Vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
// import Pages from 'vite-plugin-pages'
import { unheadVueComposablesImports } from '@unhead/vue'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
// import { VitePWA } from 'vite-plugin-pwa'
// import SassDts from 'vite-plugin-sass-dts'
// import SvgLoader from 'vite-svg-loader'
// import Compression from 'vite-plugin-compression'
// import Checker from 'vite-plugin-checker'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import { ValidateEnv } from '@julr/vite-plugin-validate-env'
import LinkAttributes from 'markdown-it-link-attributes'
import Prism from 'markdown-it-prism'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Inspect from 'vite-plugin-inspect'
import VueDevTools from 'vite-plugin-vue-devtools'
import { z } from 'zod'

const markdownWrapperClasses = 'prose prose-sm m-auto text-left'

// Obfuscator Options
/*
const obfuscatorConfig: ObfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 1,
  debugProtection: true,
  debugProtectionInterval: 4000,
  disableConsoleOutput: true,
  identifierNamesGenerator: 'hexadecimal',
  log: false,
  numbersToExpressions: true,
  renameGlobals: false,
  selfDefending: true,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 5,
  stringArray: true,
  stringArrayCallsTransform: true,
  stringArrayEncoding: ['rc4'],
  stringArrayIndexShift: true,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayWrappersCount: 5,
  stringArrayWrappersChainedCalls: true,
  stringArrayWrappersParametersMaxCount: 5,
  stringArrayWrappersType: 'function',
  stringArrayThreshold: 1,
  transformObjectKeys: true,
  unicodeEscapeSequence: false
}
*/
// https://vitejs.dev/config/
export default defineConfig({
  /*
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "~/assets/styles/scss/main.scss" as common;`,
        importer(...args: string[]) {
          if (args[0] !== '~/assets/styles/scss/') {
            return
          }

          return {
            file: `${resolve(__dirname, './assets/styles/scss')}`
          }
        }
      }
    }
  },
  */
  publicDir: './public',
  build: {
    /*
    rollupOptions: {
      output: {
        plugins: [
          obfuscator({
            fileOptions: obfuscatorConfig,
            globalOptions: obfuscatorConfig
          })
        ]
      }
    }
    */
  },
  plugins: [
    // Ref: https://github.com/Julien-R44/vite-plugin-validate-env
    // configure your environment variables inside .env, and validate them here
    ValidateEnv({
      validator: 'zod',
      schema: {
        VITE_HUSKY: z.string().optional()
      }
    }),
    VueDevTools(),
    VueRouter({
      routesFolder: 'src/views/pages',
      extensions: ['.vue', '.md'],
      dts: './types/typed-router.d.ts'
    }),
    // // https://github.com/hannoeru/vite-plugin-pages
    // Pages({
    //   dirs: [{ dir: resolve(__dirname, 'src/views/pages'), baseRoute: '' }],
    //   extensions: ['vue', 'md']
    // }),
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/]
        })
      }
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: [resolve(__dirname, 'src/views/layouts')]
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        // 'vue-router',
        VueRouterAutoImports,
        unheadVueComposablesImports,
        'vue-i18n',
        // '@vueuse/head',
        '@vueuse/core'
      ],
      dts: './types/auto-imports.d.ts'
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: './types/components.d.ts',
      resolvers: [IconsResolver()]
    }),
    // Ref: https://github.com/unplugin/unplugin-icons
    Icons(),
    // Ref: https://github.com/unplugin/unplugin-vue-markdown
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        })
      }
    }),

    // https://github.com/jpkleemans/vite-svg-loader
    // conflict with PWA
    // SvgLoader(),

    // https://github.com/fi3ework/vite-plugin-checker
    // Blocked by https://github.com/fi3ework/vite-plugin-checker/issues/115

    // Checker({
    //   vueTsc: true,
    //   eslint: {
    //     lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
    //     dev: {
    //       logLevel: ['error']
    //     }
    //   }
    // }),

    // https://github.com/antfu/vite-plugin-pwa
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: [
    //     'favicon.svg',
    //     'robots.txt',
    //     'safari-pinned-tab.svg'
    //     // 'fonts/*.ttf',
    //     // 'images/*.png'
    //   ],
    //   manifest: {
    //     name: '@hitokoto/frontend-template',
    //     short_name: 'hitkoto',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: '/pwa-192x192.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/pwa-512x512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //         purpose: 'any maskable'
    //       }
    //     ]
    //   }
    // }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, 'locales/**')]
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false
    }),

    // https://github.com/vbenjs/vite-plugin-compression
    // Compression()

    // Ref: https://unocss.dev/
    UnoCSS()
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    format: 'cjs',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false
    }
    // onFinished() {
    //   generateSitemap()
    // }
  },

  optimizeDeps: {
    include: [
      'vue',
      // 'vue-router',
      '@vueuse/core'
      // '@vueuse/head'
    ],
    exclude: ['vue-demi']
  },

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['@vue', '@vueuse', 'vue-demi']
    }
  },

  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
      '~/': `${resolve(__dirname)}/`
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/]
  }
})
