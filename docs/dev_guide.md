# Developer Guide

## Environment Setup
* Install [node.js](https://nodejs.org/en/) (v6.9.1 LTS or higher) to your development environment.
* Install [editor config](http://editorconfig.org/) plugin for your editor / IDE.
* Install [ESLint](http://eslint.org/) plugin for your editor / IDE.
* Install [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) for the joy of [hot reloading with time travel](https://www.youtube.com/watch?v=xsSnOQynTHs).

## Project Setup

```bash
$ git clone git@github.com:altayaydemir/natus.git

$ cd natus

# You can install dependencies with yarn
$ npm install -g yarn
$ yarn

# Or just use NPM
$ npm install

# Starts application on development mode
$ (yarn or npm) start

# Builds app on production mode (ready for static serving)
$ (yarn or npm) run build
```

## Directory Structure
```bash
.
├── config                      # App - build system related config.
│   ├── index.js                # Build configuration.
│   ├── devServer.js            # Development server configuration.
│   └── webpack                 # Webpack config.
├── src                         # Source code.
│   ├── components              # React components.
│   ├── containers              # React/Redux containers.
│   ├── constants               # App global config & constants.
│   ├── helpers                 # Helper classes, functions and components.
│   ├── components              # Functional stateless React Components.
│   ├── routes                  # React Router configuration.
│   └── redux                   # Redux related code, data layer of the app.
│       ├── modules             # Redux modules, similar to ducks but with seperated files.
│       ├── rootReducer.js      # Root reducer.
│       └── store.js            # Redux store.    
├── .editorconfig               # Editor Config file for generalized syntax.
├── .gitignore                  # Tells git which files to ignore.
├── README.md                   # README
├── package.json                # List of dependencies (node packages).
└── node_modules                # Node Packages.
```

## Development Flow

```bash
# Starts application on development mode
$ (yarn or npm) start

# Builds app on production mode (ready for static serving)
$ (yarn or npm) run build
```
