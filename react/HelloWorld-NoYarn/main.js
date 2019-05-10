const Greeting = React.createClass({
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
});

const HowTo = React.createClass({
  render() {
    return (
      <div>
        <h2>Set up: </h2>
        <ol>
          <li>Install python3 </li>
          <li>Go to path of your project. </li>
          <li>Create index.html and main.js files</li>
          <li>In your HTML file, import react at the top</li>
            <p> script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.js" /script</p>
            <p> script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js" /script</p>
          <li>At the bottom of your HTML file, import your main.js file</li>
            <p> script src="script/main.js" type="text/jsx" /script </p>
          <li>Start a server with `python -m http.server`</li>
            <p>You should now be able to console.log</p>
          <li>In your main.js file, add class components</li>
          <li>At the bottom of that file, you can use React.render() to render those components </li>
        </ol>

      </div>
    )
  }
});

React.render(
  <Greeting/>,
  document.getElementById('greeting-div')
);

React.render(
  <HowTo/>,
  document.getElementById('how-to-div')
);
