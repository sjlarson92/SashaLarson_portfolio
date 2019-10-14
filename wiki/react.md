# React

## Setting up react app with yarn

1. Create an app with yarn:

`yarn create react-app app-name`

2. To install dependencies:

`yarn install dependency-name`

3. Start app (you must be in the app folder)

`yarn start`

NOTE: do not push dependencies to gitHub, these are installed by using `yarn` or `yarn install` and looking at the yarn.lock file

4. Testing with Jest
`yarn test` but can also use `npm test`

## Notes

1. HTML File

the html file in a react app should utilize just one div within the body tags.

2. Components

- render always takes a component NOT a function

```js
// YES
ReactDOM.render(<App/>, document.getElementById('root'));

// NO
ReactDOM.render(App(), document.getElementById('root'));
```

- (Only for React and also because we are using it to return JSX)

```js
// const FuntionName = parameter => return
const FunctionName = () => <h1>Return</h1>
```

3. Add Image with React:

- You need to first import the Image and then use the var you imported to use it as a source for the image component

```js
import image from './imageName.jpg'

<img src={image}/>
```

4. Classes and Ids

- use the keyterms of className and id to add classes and ids to components

```js
<div className="class" id="id">
```

## Deconstructing from state

```js
const { variableToPull} = this.state;
```

### Note:

- Any time state or props get changed then those components/part of the DOM get re-rendered.
