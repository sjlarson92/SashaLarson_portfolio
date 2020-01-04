//create function that will remove any given character from a string


const removeChar = (char, word) => {
    let wordArray = word.split("")
    for(letter in wordArray){
        if(wordArray[letter] === char){
            delete wordArray[letter]
        }
    }
    return wordArray.join("")
}

const result = removeChar("h", "sasha")
console.log("result is: ", result)