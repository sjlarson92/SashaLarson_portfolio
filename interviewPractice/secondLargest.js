// array of number as strings return the second largest number in the array

const getSecondLargest = myArray => {
  const numArray = myArray.map(num => {
    return parseInt(num);
  });

  // This is selective sort if not specified use array sort method

  for (i = 0; i < numArray.length - 1; i++) {
    let index = i;
    for (j = i + 1; j < numArray.length; j++) {
      if (numArray[j] < numArray[index]) {
        let temp = numArray[j];
        numArray[j] = numArray[i];
        numArray[i] = temp;
      }
    }
  }
  return numArray;
};

const result = getSecondLargest(["5", "2", "3", "4", "1"]);
console.log("result: ", result);
