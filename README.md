# Boostact
​
**부스트액트**는 **순수 자바스크립트**를 사용하여 만든 웹 프레임워크입니다.  
​
리액트 공식 문서를 포함하여, 많은 곳에 리액트를 다루는 법에 관한 서술이 있습니다. 하지만 간단한 예제와 설명을 가지고는 리액트 내부 동작을 이해하기 어렵습니다. 우리는 이러한 것을 극복하기 위해 **리액트를 재설계하는 경험**을 시도했습니다.  
그리고 놀랍게도, 우리는 리액트와 유사하게 동작하는 Boostact를 만들었습니다!  
(의도치 않게도 여기에는 우리들만의 idea가 포함되어 있습니다. 실제 React의 동작을 따라할 수 없는 경우, 우리는 창의적인 방법으로 해결하고자 했습니다.)  
​
우리의 코드는 React에 비하면 매우 작은 사이즈이며, 동시에 성능으로도 우수하다고 말할 수는 없습니다. 그렇지만 오히려 그 점으로 인해, **자바스크립트를 아는 개발자라면 누구나 이해할 수 있습니다.**
​  
우리는 Boostact를 사용하는 방법과 가상돔, 각각의 Hook들을 어떻게 구현했는지에 대해 자세히 설명할 것입니다.
​  
아래를 읽어주시기 바랍니다.
​
​
​
# Getting start
​
## install
​
Boostact 모듈을 사용하기 위해서는 webpack과 babel이 필수적으로 필요합니다. 따라서 아래의 devDependencies를 모두 추가해주시기 바랍니다.
​
**프로젝트 생성**
​
```bash
mkdir projectFolder
npm init -y
npm install boostact
```
​
**바벨 설치**
​
```bash
npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/preset-react --save-dev
```
​
**웹팩 설치**
​
```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install html-webpack-plugin mini-css-extract-plugin --save-dev
```
​
이제 package.json에서 webpack 실행 명령어를 만들어주시면 됩니다!
아래는 .babelrc file과 webpack.config.js file 입니다. 원하시는 내용에 따라 수정하셔도 좋습니다.
​
**.babelrc**
​
```bash
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
​
```
​
**webpack.config.js**
​
```bash
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
​
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
                test: /\.(js|jsx)$/,
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
​
```
​
​
​
​
​
### index.html
```html
<!DOCTYPE html>
<body>
    <div id="root"></div>
</body>
<script type="module" src="index.jsx"></script>
​
```
​
​
​
### index.js
```javascript
import Boostact from "boostact";
import App from "./App";
/** @jsx Boostact.createElement */
​
const root = document.getElementById("root");
Boostact.render(<App />, root);
```
​
### App.js
```javascript
import Boostact from "boostact";
/** @jsx Boostact.createElement */
​
const App = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <h2>This is Boostact!</h2>
        </div>
    );
};
​
export default App;
​
```
​
여기까지 하셨다면 당신도 Boostact를 사용할 수 있습니다. 주의할 점이 있다면, babel이 jsx를 React.createElement가 아닌 Boostact.createElement로 파싱을 하게끔, jsDoc을 추가해야 한다는 점입니다.  
​  
**jsdoc (essential)**
```js
/** @jsx Boostact.createElement/
```
