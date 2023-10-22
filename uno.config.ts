import transformerCompileClass from '@unocss/transformer-compile-class'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
export default defineConfig({
  presets: [
    presetUno({
      dark: {
        dark: '.dark-mode',
        light: '.light-mode'
      }
    }),
    presetIcons(),
    presetAttributify()
  ],
  rules: [
    [
      /^bg-gradient-(\d+)$/,
      ([, d]) => ({
        '--un-gradient-shape': `${d}deg;`,
        '--un-gradient': 'var(--un-gradient-shape), var(--un-gradient-stops);',
        'background-image': 'linear-gradient(var(--un-gradient));'
      })
    ],
    [
      /^-bg-gradient-(\d+)$/,
      ([, d]) => ({
        '--un-gradient-shape': `-${d}deg;`,
        '--un-gradient': 'var(--un-gradient-shape), var(--un-gradient-stops);',
        'background-image': 'linear-gradient(var(--un-gradient));'
      })
    ],
    [
      'font-noto-serif',
      {
        'font-family': '"Noto Serif SC", "Noto Serif TC", serif'
      }
    ],
    [
      'font-code',
      {
        'font-family':
          '"Cascadia Code", var(--font-fira-code), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      }
    ]
  ],
  transformers: [
    transformerDirectives({
      enforce: 'pre'
    }),
    transformerCompileClass({
      classPrefix: 'ouo-',
      trigger: /(["'`]):ouo(?:-)?(?<name>[^\s\1]+)?:\s([^\1]*?)\1/g
    }),
    transformerVariantGroup()
  ]
})
