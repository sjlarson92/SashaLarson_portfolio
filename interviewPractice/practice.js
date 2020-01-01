//create function that will remove any given character from a string


const removeChar = (char, word) => {
    for(letter in word){
        // console.log("letter:", word[letter])
        // console.log("char:", char)
        if(word[letter] === char){
            //remove letter from word
            console.log("hi")
        }
    }
}

const result = removeChar("s", "sasha")