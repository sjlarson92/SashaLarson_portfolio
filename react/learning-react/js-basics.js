// == value check === value & type check
x = 1;
y = '1';

console.log("Double = ", x == y);
console.log("Triple = ", x === y);

let name = "Namorada";
const day = "Monday";

name = "Feiosa";
// day = "Wednesday"; ERROR
// cannot reassign const variable

console.log("name is: ", name);
console.log("day is ", day);

//for of loop

fruits = ["apple", "banana", "orange", "mango", "pineapple"];

for (let fruit of fruits){
  console.log(fruit)
}

//ES6 shortcuts to get index and element
for(const [index, element] of fruits.entries()){
  console.log(`Index is: ${index}, and value is: ${element}`);
}

//Arrow Functions or Fat Arrow

//ES6 (Note: curly braces are not required)
//ES5
const square = function(x){
  return x * x;
};

let result = square(5)
console.log("result is : ", result);

//ES6
const squareES6 = (x) => {return x * x}
let answer = squareES6(9)
//OR
const shortSquareES6 = x => x * x
console.log("shortSquareES6 is : ", shortSquareES6(4));


console.log("squareES6 is ", answer);

//Object Literal Syntax

const setNameId = (name, age) => ({name:name, age:age});

console.log(setNameId("Sasha", 26));

// map function ES6

const heroes = [
  {
    id: 1,
    name: "Iron Man",
    status: "The Real MVP"
  },
  {
    id: 2,
    name: "Captain America (loser)",
    status: "dead to me"
  },
  {
    id: 3,
    name: "Captain Marvel",
    status: "OP"
  }
];

let heroList = heroes.map(hero => {
  console.log('Currently iterating through hero', hero.name, 'who is', hero.status);
  if (hero.name === 'Iron Man'){
    hero.status = 'The Real First Avenger'
  }
  return hero;
})
console.log('result is: ', heroList);
