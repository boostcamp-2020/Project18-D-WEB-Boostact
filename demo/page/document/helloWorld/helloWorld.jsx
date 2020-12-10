import Boostact from "../../../../src/boostact/Boostact";

/** @jsx Boostact.createElement */

const HelloWorld = () => {
  return (
    <div>
      <h1 id="here">Boostact</h1>
      <hr></hr>
      <p>
        <b>Boostact</b> is a <b>web framework</b> created using pure JavaScript.
      </p>
      <p>
        There are many descriptions of how to deal with React, including official documents. However, it is difficult to understand the principle of
        reacting with simple examples and explanations. To overcome this, we've tried <b>Refact redesign.</b>
      </p>
      <p>And surprisingly, we created Boostact that works just like React!</p>
      <p>(Unexpectedly, this includes our own idea. If we can't follow the action of the actual React, we tried to solve it in a creative way.)</p>

      <p>
        Our code is a very small size compared to React, and we can't say it's excellent in performance at the same time. But rather,
        <b>that makes it understandable to any developer who knows JavaScript.</b>
      </p>

      <p>We will discuss in detail how to use Boostact and how to implement each Hook, a virtual DOM.</p>

      <p>Please read below.</p>

      <h1>Getting start</h1>
      <h2>install</h2>
      <p>To use the Boostact module, webpack and babel are essential. Therefore, please add all of the devDependencies below.</p>

      <h3>Create project</h3>
      <h3>install babel</h3>
      <h3>install webpack</h3>
      <p>
        Now you can create a webpack run command in package.json! Below are .babelrc files and webpack.config.js files. You can modify it according to
        what you want.
      </p>
      <h3>.babelrc</h3>
      <h3>webpack.config.js</h3>
      <h3>index.html</h3>
      <h3>index.js</h3>
      <h3>App.js</h3>
      <p>
        If you followed up to here, you can use Boostact, too. Note that jsDoc should be added so that the babel can parse jsx as
        Boostact.createElement instead of React.createElement.
      </p>
      <h3>jsdoc (essential)</h3>
    </div>
  );
};

//const text = () => marked("# Marked in the browser\n\nRendered by **marked**.");

export default HelloWorld;
