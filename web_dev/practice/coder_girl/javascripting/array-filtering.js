var numbers = [1,2,3,4,5,6,7,8,9,10];

var filtered = numbers.filter(function evenNumbers (number) {
    return number % 2 === 0;
  })
// % finds the remainder. So this function filters even numbers by determining which numbers have a remainder of 0 when divided by 2
console.log(filtered);
