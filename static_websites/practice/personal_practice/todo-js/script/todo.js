const todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];

//Todo Item consturctor
function Todo(text) {
  this.id = 5; //TODO this needs to autoincrement after last id in todos array
  this.text = text;
  this.complete = false;
};

function counter() {
  const spanRemainCount = document.getElementById("remaining-count");
  count = 0;
  for (i = 0; i < todos.length; i++){
    if (todos[i].complete == false){
      count = count + 1;
    }
  }
  spanRemainCount.innerHTML = count;
};

function setUp() {
  for (i=0; i < todos.length; i++){
    const task = todos[i];
    if (task.complete == true){
      const inputElem = document.getElementsByClassName("todo-checkbox")[i];
      inputElem.checked = true;
      inputElem.parentElement.classList.add("complete");
    }
  }
};

function displayToDoList(todosList){
  const divToDo = document.getElementsByClassName("todo")[0];
  for (i=0; i < todosList.length; i++){
    var cln = divToDo.cloneNode(true);
    cln.getElementsByClassName("todo-text")[0].innerHTML = todosList[i].text;
    document.getElementById("main-todo-list").appendChild(cln);
  }
  document.getElementById("main-todo-list").removeChild(divToDo);
};

function addNewToDoItemToDisplay(newTodoItem){
  const divToDo = document.getElementsByClassName("todo")[0];
  var cln = divToDo.cloneNode(true);
  cln.className = "todo";
  cln.getElementsByClassName("todo-checkbox")[0].checked = false;
  cln.getElementsByClassName("todo-text")[0].innerHTML = newTodoItem.text;
  document.getElementById("main-todo-list").appendChild(cln);
  counter()
};

function checked(inputElem,task){
  if (inputElem.checked == true){
    inputElem.parentElement.classList.add("complete");
    task.complete = true;

  }
  else if (inputElem.checked == false){
    inputElem.parentElement.classList.remove("complete");
    task.complete = false;
  }
  counter();
  return task.complete;

}

function clickCheckBox(){
  for (i = 0; i < todos.length; i++){
    const inputElem = document.getElementsByClassName("todo-checkbox")[i];
    const task = todos[i];
    inputElem.onclick = function() {checked(inputElem,task)};
  }
};

// function markTaskCompleteClickDiv(){
//   for (i = 0; i < )
// };

function createNewToDoListItem(){
  let inputTagElems = document.getElementsByClassName("app")[0].getElementsByTagName("input");
  for (i = 0; i < inputTagElems.length; i++){
    if (inputTagElems[i].type == "text"){
      inputTextElem = inputTagElems[i];
    }
  }
  inputTextElem.addEventListener('keypress', function (addNewToDoItem){
    if (addNewToDoItem.keyCode == 13) {
      let userInput = inputTextElem.value;
      let newTodoItem = new Todo(userInput);
      todos.push(newTodoItem);
      inputTextElem.value = "";
      console.log(newTodoItem);
      addNewToDoItemToDisplay(newTodoItem)
      clickCheckBox()
    }
  })
};

createNewToDoListItem()
displayToDoList(todos)
setUp()
clickCheckBox()
counter()
