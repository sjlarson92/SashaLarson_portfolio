// console.log ("This file is linked!");

//these are objects

var course = {
  name: 'Physics',
  department: 'Science',
  teacher: 'Bruce Banner',
  semester: 'Spring 2010',
  rating: [3.0,2.5,4.0]
};

var course2 = {
  name: 'Mechanical Engineering',
  department: 'Math',
  teacher: 'Tony Stark',
  semester: 'Winter 2011',
  rating: [2.5, 4.5, 3.5]
};

var course3 = {
  name: 'Biological Science',
  department: 'Science',
  teacher: 'Dr. Strange',
  semester: 'Winter 2011',
  rating: [4.0, 3.5, 3.0]
}

var course4 = {
  name: 'US History',
  department: 'History',
  teacher: 'Steve Rogers',
  semester: 'Spring 2010',
  rating: [4.0, 1.0, 3.5]
}

//below are the variables I used before creating the objects above
//var teacher ="Sally Jones";
// var rating= [5.0,3.0,4.0];
// var courses = [["Physics","Science"],["Calculus","Math"],["Algebra", "Math"], ["Trigonometry","Math"]];

//JAVASCRIPT FOR TEACHERS
//NEED TO FIND A WAY TO CHANGE RATING DEPENDING ON TEACHERS
//
// var userRating = parseInt(prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0?"));
//use parseInt so that the prompt only takes in number and not a string!

//This is a if statement for a user prompt for a teacher rating
do {
  userRating = parseInt(prompt("We would like for you to review. Please enter a rating between 0.0 - 5.0?"))
}
while (userRating > 5.0 || userRating < 0);

addTeacherRating(course.rating, userRating);
alert("Thanks for you review! " + course.teacher + "\'s average rating is now " + getRatingAvg(course.rating));


//JAVASCRIPT FOR COURSES

// console.log(course.teacher)
// //prints Bruce Banner
// console.log(course['teacher'])
//also prints Bruce Banner

function filterByDepartment (department, courses){
  var matchingCourses = '';
    for (var i=0; i < courses.length; i++){
      var aCourse = courses[i];
      if(aCourse.department == departmentInput){
        matchingCourses += aCourse.name + ', ';
      }
    }
    return matchingCourses;
}

var departmentInput = prompt("What department would you like to fiter by?", "Ex: Science, Math or History");

var searchDepartments = ['Science','Math','History'];

// console.log(pets.includes('at')); <- this is to check if the array includes the departments

if (!searchDepartments.includes(departmentInput)){
  var departmentInput = prompt("What department would you like to fiter by?", "Ex: Science, Math or History");
}

var filteredCourses = filterByDepartment(departmentInput, [course, course2, course3, course4]);

console.log(filteredCourses)

// This is an average function! It works!

function getRatingAvg(ratingsArray){
  var sumRating = ratingsArray.reduce(function(total,amount){
    return total + amount
  });
  var avgRating = (sumRating/course.rating.length);
    return avgRating
  };
// console.log(getRatingAvg(rating)); use this to test getRatingAvg function

// This function adds a rating to the chosen ratingsArray
function addTeacherRating(ratingsArray, newRating){
  var newArray = ratingsArray.push(newRating);
  return newArray
};
// addTeacherRating(rating, 3);
// console.log(rating);
// use this to test addTeacherRating function


// console.log('Teacher: '+teacher);
// console.log('Department: ' + department);
// console.log('Ratings: ' +rating);
// console.log('Avg Rating: '+avgRating);
