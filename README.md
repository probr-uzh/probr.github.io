# probr-site

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.0.0-rc5.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and NPM](nodejs.org) >= v0.12.0
- [Bower](bower.io) (`npm install --global bower`)
- [Grunt](http://gruntjs.com/) (`npm install --global grunt-cli`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Checkout the `development` branch of the repository.

2. Run `npm install` to install server dependencies.

3. Run `bower install` to install front-end dependencies.

4. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

5. Run `grunt serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview. To deploy a new version, first build the project with `grunt build` and then deploy it with `grunt buildcontrol:github`. Do not merge the development branch into master manually!
