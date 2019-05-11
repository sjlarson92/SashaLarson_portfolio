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
