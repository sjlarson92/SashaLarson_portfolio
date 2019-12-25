// const isPalindrome = (word) => {
//     const originalWord = [];
//     for (let i = 0; i < word.length; i++) {
//         const letter = word[i]
//         originalWord.push(letter)
//     }
//     const reverse = [];
//     for (let i = 0; i < word.length; i++) {
//         const letter = word[i]
//         reverse.unshift(letter);
//     }
//     console.log("originalWord", originalWord)
//     console.log("reverse", reverse)

//     if (originalWord == reverse) {
//         console.log("This word is a palindrome")
//         return true
//     }
//     else {
//         console.log("This word is not a palindrome")
//         return false
//     }
// }

const isPalindrome = (word) => {
    console.log("word: ", word)
    let reverseWord;
    for (letter in word) {
        reverseWord.unshift(letter)
    }
    console.log("reverseWord: ", reverseWord)
    return true
}

const result = isPalindrome("dog")
console.log("result: ", result)