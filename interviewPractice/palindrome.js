const isPalindrome = (word) => {
    console.log("word: ", word)
    const reverseWord = word.split("").reverse().join("")
    if (word === reverseWord) {
        return true
    }
    else {
        return false
    }
}

const result = isPalindrome("abccba")
console.log("result: ", result)

const result2 = isPalindrome("dog")
console.log("result2: ", result2)