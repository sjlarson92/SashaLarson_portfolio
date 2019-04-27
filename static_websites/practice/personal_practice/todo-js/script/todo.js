let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

// Add Todo Items to List:
const divToDo = document.getElementsByClassName("todo")[0];

for (i=0; i < todos.length; i++){
  var cln = divToDo.cloneNode(true);
  cln.getElementsByClassName("todo-text")[0].innerHTML = todos[i].text;

  document.getElementById("main-todo-list").appendChild(cln);
}

document.getElementById("main-todo-list").removeChild(divToDo);

//Mark Todo items complete:
function checked(inputElem,task){

  if (inputElem.checked == true){
    console.log("Checkbox is checked");
    inputElem.parentElement.classList.add("complete");
    task.complete = true;
  }
  else if (inputElem.checked == false){
    console.log("Checkbox is not checked");
    inputElem.parentElement.classList.remove("complete");
    task.complete = false;
  }
  console.log(task.complete);
}

for (i = 0; i < todos.length; i++){
  //console.log("This is the iteration: " + i);
  const inputElem = document.getElementsByClassName("todo-checkbox")[i];
  let task = todos[i];
  // console.log(task);
  inputElem.onclick = function() {checked(inputElem,task)};

}
