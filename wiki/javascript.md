# JavaScript

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
testID = {`image-${image.id}`}
// use single ticks not quotations
```
