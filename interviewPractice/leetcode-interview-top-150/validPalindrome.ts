/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

 Given a string s, return true if it is a palindrome, or false otherwise.
*/

const isPalindrome = (s: string) => {
    const strippedString = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

    const reverseString = strippedString.split('').reverse().join('')

    return strippedString === reverseString;
};

const example1 = isPalindrome("A man, a plan, a canal: Panama")
console.log({ example1})
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const example2 = isPalindrome("race a car")
console.log({ example2})
// Output: false
// Explanation: "raceacar" is not a palindrome.

const example3 = isPalindrome(" ")
console.log({ example3})
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.