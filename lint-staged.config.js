module.exports = {
  '**/*.vue': [
    'eslint -c .eslintrc.js',
    'stylelint --config stylelint.config.js'
  ],
  '**/*.{ts,tsx,js,jsx}': ['eslint -c .eslintrc.js'],
  '**/*.{ts,tsx,vue}': [() => 'tsc -p tsconfig.json --noEmit'],
  '**/*.{scss,css,sass}': ['stylelint --config stylelint.config.js']
}
