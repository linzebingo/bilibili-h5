# vue-ts-webpack
> a full-featured Webpack setup with hot reload & css extraction
> This template include vue2 + typescript + webpack + av-ts

## Usage
```bash

# install dependencies
npm install

# server with reload at localhost:8090
npm run dev

# build for production with minification
npm run build

```

## Project Structure
- build/    *#webpack config files*
- config/
    - index.js # main project config
- src/
    - main.ts # main entry file
    - App.vue # main app component
    - App.ts
    - components/ # ui components
    - asserts/    # module asserts (processed by webpack)
- static/   # pure static asserts (directly copied)
- index.html # index.html template
- package.json # build script and dependencies
- tsconfig.json # typescript config
- typings.json # typescript declaration files

## Extra
- vue-ts-loader: load TypeScript in vue's single file component, if your want enjoy the convenience of editor, you can put the TypeScript code in a single .ts file and use ts-loader instand of vue-ts-loader
- av-ts: wrap vue's API in a safe way