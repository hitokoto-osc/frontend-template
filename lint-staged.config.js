module.exports = {
  '**.{ts,tsx,js,vue}': ['eslint -c .eslintrc.js'],
  '**/*.{ts,tsx,vue}': () => 'tsc -p tsconfig.json --noEmit',
  '*.scss': ['stylelint --config stylelint.config.js']
}
