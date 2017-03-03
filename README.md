# Mahisoft mentorship project

## Goal

The main goal of this workshop is to create a base project for modern web applications, and learn cool and cutting edge technologies in the process.

## Technologies

* [Yarn](https://yarnpkg.com/en/) as a dependency manager
* [Webpack](https://webpack.js.org/) as a module bundler
* [React](https://facebook.github.io/react/) as the web library
* [Javascript ES6](http://es6-features.org/) as the programming language

## Setup instructions

1. `yarn install` This will install all the dependencies from **yarn.lock** file.
2. `yarn start` This will fire up webpack and a little server on port 3000

## Todo
* Add minification script
* Add test framework
* Add sass support
* Add css modules support
* Add routing
* Upgrade to react hot modules 3

## Known Issues

* Flaky hot reloading on stateless components. (May require to have a stateful component in the chain to work)