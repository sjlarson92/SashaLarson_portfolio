// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (numbers, target) => {

    const answers = []

    for (const [index, num] of numbers.entries()) {
        const secondIndex = numbers.findIndex((innerNum, innerIndex) =>
            num + innerNum === target
        )

        if (secondIndex !== -1 && index !== secondIndex) {
            console.log({ num, index, secondIndex })
            answers.push(index, secondIndex)
            // return true
            break;
        }
        console.log("answers: ", answers)
        // return false
    }

    console.log("answers after loop: ", answers)

    return answers
};

const example1 = twoSum(nums = [2,7,11,15], target = 9)
console.log('example1: ', example1)
// [0,1]

const example2 = twoSum([3,2,4], target = 6)
console.log('example1: ', example1)
// [1,2]

const example3 = twoSum([3,3], target = 6)
console.log('example1: ', example1)
// [0,1]