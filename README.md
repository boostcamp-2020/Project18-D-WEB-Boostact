# 공식문서

# Boostact

- [Boostact를 사용하여 만든 Boostact document (제작 중)](https://boostact.github.io/)
- [Boostact npm adress](https://www.npmjs.com/package/boostact)

# WHAT

**부스트액트**는 **순수 자바스크립트**만을 사용하여 만든 웹 프레임워크입니다.

React 공식 문서를 포함한 많은 곳에 React를 다루는 법이 설명되어 있지만, React의 내부 구조를 설명한 곳은 많지 않았습니다. 그래서 저희 팀은 React의 내부 구조와 웹 프레임워크에 대한 더 깊은 기술적인 이해를 위해 **리액트 재설계**를 도전했습니다.

Boostact는 React에 비해 사이즈가 작고, 성능 면에서도 더 뛰어나지 않습니다. 하지만, 분명 React와 매우 유사하게 동작합니다. 저희는 Boostact가 **자바스크립트를 아는 개발자들이 React를 이해하는 데에 큰 도움**이 될 것이라 생각합니니다. 더 나아가, 웹 프레임워크 전반을 이해하는 데에도 도움이 될 것입니다.

아래에서는 어떻게 Boostact를 사용해볼 수 있는지 간단하게 설명하려고 합니다.

자세한 사항은 [부스트액트 공식문서](https://boostact.github.io/)에서 확인해주시기 바랍니다.

# Getting start

## install

Boostact 모듈을 사용하기 위해서는 webpack과 babel이 필수적으로 필요합니다. 따라서 아래의 devDependencies를 모두 추가해주시기 바랍니다.

### 프로젝트 생성

```
mkdir projectFolder
npm init -y
npm install boostact
```

### 바벨 설치

```
npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/preset-react --save-dev
```

### 웹팩 설치

```
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install html-webpack-plugin mini-css-extract-plugin --save-dev
```

이제 package.json에서 webpack 실행 명령어를 만들어주시면 됩니다.
아래는 .babelrc file과 webpack.config.js file 입니다.

### .babelrc

```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

**webpack.config.js**

```jsx
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        index: ["@babel/polyfill", "./index.js"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        host: "127.0.0.1",
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        hot: true,
        inline: true,
        port: 9000,
        open: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "index",
            hash: true,
            chunks: ["index"],
            filename: "index.html",
            template: "./index.html",
        }),
    ],
};
```

### index.html

```html
<!DOCTYPE html>
<body>
  <div id="root"></div>
</body>
<script type="module" src="index.jsx"></script>
```

### index.js

```jsx
import { Boostact } from "boostact";
import App from "./App";
/** @jsx Boostact.createElement */

const root = document.getElementById("root");
Boostact.render(<App />, root);
```

### App.js

```jsx
import { Boostact } from "boostact";
/** @jsx Boostact.createElement */

const App = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <h2>This is Boostact!</h2>
        </div>
    );
};

export default App;
```
여기까지 읽으셨다면, 여러분도 부스트액트를 사용하실 수 있습니다.
주의할 점은 babel이 jsx를 React.createElement가 아닌 Boostact.createElement로 파싱을 하게끔, 아래의 jsDoc을 추가해야 한다는 점입니다.

### jsdoc (essential)

```jsx
/** @jsx Boostact.createElement/
```

## contributor

- [kakasoo](https://github.com/kakasoo)
- [ji3427](https://github.com/ji3427)
- [seunghyoKu](https://github.com/SeunghyoKu)
- [simjaeik](https://github.com/simjaeik)

# Boostact

**Boostact** is a **web framework** created using vanilla JavaScript.
There are many descriptions of how to deal with React, including official documents. However, it is difficult to understand the principle of react deeply with simple examples and explanations. To overcome this, we've tried to **redesign React.**
And surprisingly, we created Boostact that works just like React!
(Unexpectedly, it includes our own idea. If we cannot follow the action of the actual React, we tried to solve it in a creative way.)
Our code is a very small size compared to React, and we cannot say it is excellent in performance at the same time. But rather, **that makes it understandable to any developer who knows JavaScript.**
We will discuss in detail how to use Boostact and how to implement each Hook, a virtual DOM.
Please read below.

# Getting start

## install

To use the Boostact module, webpack and babel are essential. Therefore, please add all of the devDependencies below.

**Create project**

```
mkdir projectFolder
npm init -y
npm install boostact
```

**install babel**

```
npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/preset-react --save-dev
```

**install webpack**

```
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install html-webpack-plugin mini-css-extract-plugin --save-dev
```

Now you can create a webpack run command in package.json!
Below are .babelrc files and webpack.config.js files. You can modify it according to what you want.**.babelrc**

```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

**webpack.config.js**

```jsx
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
    mode: "development",
    entry: {
        index: ["@babel/polyfill", "./index.js"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\\\\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        host: "127.0.0.1",
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        hot: true,
        inline: true,
        port: 9000,
        open: true,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "index",
            hash: true,
            chunks: ["index"],
            filename: "index.html",
            template: "./index.html",
        }),
    ],
};
```

### index.html

```html
<!DOCTYPE html>
<body>
    <div id="root"></div>
</body>
<script type="module" src="index.jsx"></script>
```

### index.js

```jsx
import { Boostact } from "boostact";
import App from "./App";
/** @jsx Boostact.createElement */
const root = document.getElementById("root");
Boostact.render(<App />, root);
```

### App.js

```jsx
import { Boostact } from "boostact";
/** @jsx Boostact.createElement */
const App = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <h2>This is Boostact!</h2>
        </div>
    );
};
export default App;
```

If you followed up to here, you can use Boostact. Note that jsDoc should be added so that the babel can parse jsx as Boostact.createElement instead of React.createElement.

**jsdoc (essential)**

```jsx
/** @jsx Boostact.createElement/
```

## contributor

- [kakasoo](https://github.com/kakasoo)
- [ji3427](https://github.com/ji3427)
- [seunghyoKu](https://github.com/SeunghyoKu)
- [simjaeik](https://github.com/simjaeik)
