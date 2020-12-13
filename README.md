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
Below are .babelrc files and webpack.config.js files. You can modify it according to what you want.  
**.babelrc**

```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"]
}

```

**webpack.config.js**

```
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

```
<!DOCTYPE html>
<body>
    <div id="root"></div>
</body>
<script type="module" src="index.jsx"></script>

```

### index.js

```
import Boostact from "boostact";
import App from "./App";
/** @jsx Boostact.createElement */
const root = document.getElementById("root");
Boostact.render(<App />, root);

```

### App.js

```
import Boostact from "boostact";
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

```
/** @jsx Boostact.createElement/

```
