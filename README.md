# Static Site Boilerplate [![Build Status](https://travis-ci.org/jonmilner/web-boilerplate.svg?branch=master)](https://travis-ci.org/jonmilner/web-boilerplate)
A boilerplate for new static web projects.

## Requirements
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

## Installation
```
npm install
```

## Development
```
npm start
```

## Tools

### [postcss](https://github.com/postcss/postcss) ```build:css```
```
npm run lint:css && postcss -c postcss.config.json
```
* [postcss-import](https://github.com/postcss/postcss-import) - PostCSS plugin to inline @import rules content
* [postcss-apply](https://github.com/pascalduez/postcss-apply) - PostCSS plugin enabling custom properties sets references
* [precss](https://github.com/jonathantneal/precss) - Use Sass-like markup in your CSS
* [postcss-cssnext](https://github.com/MoOx/postcss-cssnext) - PostCSS plugin to use tomorrow's CSS syntax, today.
* [postcss-assets](https://github.com/assetsjs/postcss-assets) - An asset manager for CSS
* [postcss-hexrgba](https://github.com/seaneking/postcss-hexrgba) - PostCSS plugin that adds shorthand hex methods to rgba() values
* [postcss-reporter](https://github.com/postcss/postcss-reporter) - Log PostCSS messages in the console

### [stylelint](https://github.com/stylelint/stylelint) ```lint:css```
```
stylelint 'src/css/**/*.css' || true
```

### [imagemin](https://github.com/imagemin/imagemin) ```build:images```
```
imagemin src/img dist/img -p
```

### [webpack](https://github.com/webpack/webpack) ```build:js```
```
webpack
```

### [pug](https://github.com/pugjs/pug) ```build:html```
```
pug src/views/*.pug -o dist --pretty
```

### [browsersync](https://github.com/Browsersync/browser-sync) ```serve```
```
browser-sync start --s --ss 'dist' --f 'dist/**/*' --no-notify --no-ui
```

## Plugins
* [normalize.css](https://github.com/necolas/normalize.css)
* [fastclick](https://github.com/ftlabs/fastclick)
* [cq-prolyfill](https://github.com/ausi/cq-prolyfill)

## To Do
- [ ] Customize the style guide template.
