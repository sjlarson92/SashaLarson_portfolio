to install dependency use yarn: `yarn install dependency-name`

do not push dependencies to gitHub, these are installed by using `yarn` or `yarn install` and looking at the yarn.lock file

run app with `yarn start` and you must be in the app folder

the html file in a react app should utilize just one div within the body tags.

render always takes a component NOT a function

```js
// YES
ReactDOM.render(<App/>, document.getElementById('root'));

// NO
ReactDOM.render(App(), document.getElementById('root'));
```

Component: (Only for React and also because we are using it to return JSX)

```js
// const FuntionName = parameter => return
const FunctionName = () => <h1>Return</h1>
```

Arrow Function: (Javascript)

```js
// const functionName = parameter => return
const functionName = () => "Hello"

const addNumbers = (x, y) => x + y
```

Create an app with yarn:
```js
yarn create react-app app-name
```

Add Image with React:

- You need to first import the Image and then use the var you imported to use it as a source for the image component

```js
import image from './imageName.jpg'

<img src={image}/>
```
