# bilibili-h5

> 基于Webpack,vue,vuex,vue-router的仿bilibili的h5页面

[DEMO预览](https://linzebin.github.io/bilibili-h5/dist/)

## Usage2

```bash

# install dependencies
npm install

# server with reload at localhost:8090
npm run dev

# build for production with minification
npm run build

```

## Project Structure

```
- build/            # webpack config file
- config/
    - index.js      # main project config
- src/
    - main.ts       # main entry file
    - App.vue       # main app component
    - App.ts
    - components/   # ui components
    - asserts/      # module asserts (processed by webpack)
- editorconfig      # editor config
- static/           # pure static asserts (directly copied)
- index.html        # index.html template
- package.json      # build script and dependencies
- tsconfig.json     # typescript config
- tslint            # tslint config
- typings.json      # typescript declaration files
```

## Technology Stack
- main stakc
    - [Vue]() - Simple yet powerful library for building modern web interfaces.
    - [TypeScript]() - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- other stack
    - [Yarn]() - Fast, reliable, and secure dependency management.
    - [Vuex]() - Centralized State Management for Vue.js.
    - [VueRouter]() -  It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.
    - [Element](http://element.eleme.io/#/zh-CN) - Desktop UI elements for Vue.js 2.0
    - [Webpack]() - A bundler for javascript and friends. Packs many modules into a few bundled assets.
- dependencies
    - [vue-ts-loader](https://github.com/HerringtonDarkholme/vue-ts-loader) - Load TypeScript in vue's single file component, if your want enjoy the convenience of editor, you can put the TypeScript code in a single .ts file and use ts-loader instand of vue-ts-loader
    - [av-ts](https://github.com/HerringtonDarkholme/av-ts) -  Wrap vue's API in a safe way
- plugins
    - [vetur](https://github.com/octref/vetur) - A VSCode plugin

## Module
- pages 
    - index
    - channel
    - live
    - ranking
    - space
    - history
    - search
- components
    - topbar: include history & search(modal)
    - tabs menu: route to page
    - carousel: 