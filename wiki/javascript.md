# JavaScript

- run javascript from terminial with ` node filename.js`

## Arrow Function:

```js
// const functionName = parameter => return
const functionName = () => "Hello"

const addNumbers = (x, y) => x + y
```

## String Literals

```js
`You can use a variable inside a string by ${variable}`
// Must use single ticks for this
```

## Ternary

- Shorthand for an If/ Else statements

```js

const something = (1 === 2) ? 'They are equal' : 'They are not equal'
// if (1 === 2) {
// return 'They are equal'
// } else {
// return 'They are not equal'
// }

```

## Inline Logical && Operator

- Logical operators allow you to define a statement and then if that statement is true it will execute the following code after &&

```js
return randomVariable === anotherVariable && true;
/*
if (randomVariable === anotherVariable){
return true
} else {
 return false
}
*/
```

or 

```js
image.comments && image.comments.map(comment =>
          !comment.deleted && (
            <CommentLayout
              key={`comment-${comment.id}-${image.id}`}
              comment={comment}
              onClick={() => deleteComment(image.id, comment.id)}
            />
          )
        )
```


## String Literals

```js
testID = `image-${image.id}`
// use single ticks not quotations
```

## Promises

- A way to combat asynchronous functions by allowing code to run and then return to the promise and execute after

- Promises can be resolved or rejected. If a promise is resolved it can continue to the .then . If the promise is rejected then it goes to the .catch block

```js
axios.get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                console.log('inside the then()')
                setDogImage(response.data.message)
            })
            .catch((error) => {
                console.log("Error fetching picsture", error)
            })
```