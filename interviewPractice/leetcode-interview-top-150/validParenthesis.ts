/*
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

 An input string is valid if:

 - Open brackets must be closed by the same type of brackets.
 - Open brackets must be closed in the correct order.
 - Every close bracket has a corresponding open bracket of the same type.
*/

const isValid = (s: string): boolean => {
    const stack = []
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false
            }
        }
    }

    return stack.length === 0
};

// Lucas's solution using regex
const isParenthesisValid = (parenthesisString: string): boolean => {

    const regexExpression = new RegExp(/\(\)|\[\]|\{\}/g);

    return regexExpression.test(parenthesisString)
}

const example1 = isValid('()')
console.log({ example1})
// true

const example2 = isValid("()[]{}")
console.log({ example2 })
// true

const example3 = isValid('(]')
console.log({ example3})
// false

const example4 = isValid('([])')
console.log({ example4})
//true