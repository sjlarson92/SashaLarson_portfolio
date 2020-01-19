//how do you print duplicate characters from a string

const findDuplicateChar = word => {
  let duplicateLetter = [];
  let count = 0;
  for (char of word) {
    count = count + 1;
    for (i = count; i <= word.length; i++) {
      console.log("we are comparing: ", char, " to: ", word[i]);
      if (char === word[i]) {
        console.log("duplicate: ", char);
        duplicateLetter.push(char);
      }
    }
  }
  return duplicateLetter;
};

console.log(findDuplicateChar("lucas"));
