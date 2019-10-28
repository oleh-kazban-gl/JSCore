Requirements:
- VSCode (https://code.visualstudio.com/)
- NodeJS (https://nodejs.org/uk/) + NPM
- NPM packages repo (https://www.npmjs.com/)
- Babel (https://babeljs.io/setup#installation)
- Webpack (https://webpack.js.org/)
- Typescript (https://www.typescriptlang.org/)
- ESLint (https://eslint.org/)
- TSLint (https://palantir.github.io/tslint/, recommended setup https://gist.github.com/oleh-kazban-gl/9db8bcff1c9a21c59d4d3062fee49463)

---

1. mkdir JSNext
2. cd JSNext
3. ```npm init```
4. ```npm install -g webpack webpack-cli```
5. ```npm install --save-dev webpack webpack-cli webpack-dev-server```
6. ```npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-eslint```
6. ```npm install --save babel-polyfill```
7. ```npm install -g eslint```
8. ```npm install --save-dev eslint eslint-config-airbnb```
9. ```.\node_modules\.bin\eslint --init```
10. Create a webpack configuration file in a root folder - webpack.config.js
11. Create a main entry file in the rrot of your project - main.js
12. 
```
//webpack.config.js

module.exports = {
    entry: ['./main.js'],
    output: {
        filename: 'dist/bundle.js'
    }
};
```
13. ```npm install --save-dev clean-webpack-plugin```
---
Usefull:
- Webpack output management https://webpack.js.org/guides/output-management/

<!-- xxx. ```npm install --save-dev typescript ts-loader``` -->
<!-- xxx. ```npm install --save-dev tslint``` -->

