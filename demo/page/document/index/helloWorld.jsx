import Boostact from "../../../../src/boostact/Boostact";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import classes from "../style";
/** @jsx Boostact.createElement */

const string1 = marked(`
# 서문
​
**부스트액트**는 **순수 자바스크립트**를 사용하여 만든 웹 프레임워크입니다. 리액트 공식 문서를 포함하여, 많은 곳에 리액트를 다루는 법에 관한 서술이 있습니다. 하지만 간단한 예제와 설명을 가지고는 리액트 내부 동작을 이해하기 어렵습니다. 우리는 이러한 것을 해결하기 위해 **리액트를 처음부터 다시 만들어보는 경험**을 시도했습니다.    
  
Boostact는 그 결과로써 탄생한 프레임워크입니다. Boostact는 React의 Spec을 보고 따라 만든 만큼, 대부분의 면에서 동일하게 동작하고 있습니다. 다만 내부를 예측할 수 없는 경우에 한해, 우리만의 아이디어를 접목시켜 보았습니다.​
전체적으로 볼 때, 이 프레임워크의 코드는 React에 비해 매우 작은 사이즈이며, 동시에 성능으로도 우수하다고 말할 수는 없겠습니다. 하지만, 오히려 그 점으로 인해, **자바스크립트를 다룰 줄 아는 사람이라면 쉽게 이해할 수 있는 코드라 생각됩니다.**  
  ​    
우리는 Boostact를 사용하는 방법과 가상돔, 각각의 Hook들을 어떻게 구현했는지에 대해 자세히 설명할 것입니다. 이 장에서는 우선적으로, Boostact를 사용하기 위한 밑작업을 서술할 것입니다. 자세한 내용은 아래를 읽어주시기 바랍니다.​
​
# Boostact로 Hello world​
## install
​
Boostact를 사용하기 위해서는 webpack과 babel이 필수적으로 필요합니다. 따라서 아래의 devDependencies를 모두 추가해주시기 바랍니다.
​    
### 웹팩 설치 및 바벨 설치
`);

const highlight1 = hljs.highlight(
  "javascript",
  `
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install html-webpack-plugin mini-css-extract-plugin --save-dev
npm install @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/preset-react --save-dev
`
).value;

const string2 = marked(`

웹팩과 바벨을 설치한 후에는 아래와 같은 setting file들이 필요합니다. 다만 아래는 예시일 뿐이니, 필요에 따라 다른 설정을 추가하셔도 좋습니다.
​​
### .babelrc`);

const highlight2 = hljs.highlight(
  "javascript",
  `
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
`
).value;

const string3 = marked(`
### webpack.config.js
`);

const highlight3 = hljs.highlight(
  "javascript",
  `
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
    `
).value;

const string4 = marked(`설정이 모두 끝났다면, 이제 package.json에서 webpack 실행 명령어를 만들어주시면 됩니다. 다음으로는 boostact의 동작을 확인할 수 있는 예제 코드들입니다.

### index.html
`);

const highlight4 = hljs.highlight(
  "javascript",
  `
<!DOCTYPE html>
<body>
    <div id="root"></div>
</body>
<script type="module" src="index.jsx"></script>
`
).value;

const string5 = marked(`### index.js`);

const highlight5 = hljs.highlight(
  "javascript",
  `
import { Boostact } from "boostact";
import App from "./App";
/** @jsx Boostact.createElement */
const root = document.getElementById("root");
Boostact.render(<App />, root);
`
).value;

const string6 = marked(`### App.js`);

const highlight6 = hljs.highlight(
  "javascript",
  `
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
`
).value;

const string7 = marked(`
여기까지로 모든 설명이 끝났습니다. 주의할 점은, index.js와 App.js file과 같이 jsx 문법을 사용하는 파일들에 다음과 같은 주석을 추가해야 한다는 점입니다.
이는 babel이 jsx를 React.createElement가 아닌 Boostact.createElement로 처리하게 해줍니다.   
​  
### jsdoc (essential)
`);

const highlight7 = hljs.highlight("javascript", `/** @jsx Boostact.createElement/`).value;

const HelloWorld = () => {
  return (
    <div className={classes.paddingRightAndBottom}>
      <div className={classes.explaination} dangerouslySetInnerHTML={string1} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight1}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string2} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight2}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string3} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight3}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string4} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight4}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string5} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight5}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string6} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight6}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>

      <div className={classes.explaination} dangerouslySetInnerHTML={string7} />
      <pre className={classes.codeBox}>
        <code
          className="javascript hljs"
          dangerouslySetInnerHTML={highlight7}
          style={{ marginRight: "20px", color: "white", borderRadius: "30px" }}
        ></code>
      </pre>
    </div>
  );
};

export default HelloWorld;
