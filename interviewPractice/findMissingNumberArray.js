// in an array of 1-100 , 1 number is missing, how do find it?
// - function that returns the missing number

let refArray = []

for (num = 1; num <=100 ; num++){
    refArray.push(num)
}

const findMissingNumber = (array) => {
    for(num in array){
        console.log("num: ", num)
        if(array[num] != refArray[num]){
            return refArray[num]
        }
    }
}

result = findMissingNumber([2,3,4,5,6,7,8,9,10,11,13, 1])

console.log("result is: " ,result)