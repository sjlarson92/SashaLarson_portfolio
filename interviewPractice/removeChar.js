//create function that will remove any given character from a string


const removeChar = (char, word) => {
    let wordArray = word.split("")
    for(let index in wordArray){
        if(wordArray[index] === char){
            delete wordArray[index]
        }
    }
    return wordArray.join("")
}

const result = removeChar("s", "sasha")
console.log("result is: ", result)
