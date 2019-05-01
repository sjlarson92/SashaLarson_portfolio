const todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];
const divToDo = document.getElementsByClassName("todo")[0];
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
  document.getElementById("main-todo-list").removeChild(divToDo);
  for (i=0; i < todosList.length; i++){
    var cln = divToDo.cloneNode(true);
    cln.getElementsByClassName("todo-text")[0].innerHTML = todosList[i].text;
    document.getElementById("main-todo-list").appendChild(cln);
  }
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

//this function is needed to stop overlapping div events
function stopBubbling(event){
  event.stopPropagation();
  event.cancelBubble = true;
}

function checked(inputElem,task){
  stopBubbling(this.event);

  if (inputElem.checked == true){
    inputElem.parentElement.classList.add("complete");
    task.complete = true;
  }
  else if (inputElem.checked == false){
    console.log("Task is not complete")
    inputElem.parentElement.classList.remove("complete");
    task.complete = false;
  }
  counter()
  return task.complete;
}

function clickedDivToModifyStyling(inputElem,task){
  stopBubbling(this.event);
  if (inputElem.checked == true){
    inputElem.parentElement.classList.remove("complete");
    task.complete = false;
    inputElem.checked = false;
  }
  else if (inputElem.checked == false){
    inputElem.parentElement.classList.add("complete")
    task.complete = true;
    inputElem.checked = true;
  }
  counter()
}

//Marks tasks complete when user clicks DIV
function markTaskCompleteClickDiv(){
  for (i = 0; i < todos.length; i++){
    const divToDo = document.getElementsByClassName("todo")[i];
    const taskObj = todos[i];
    inputElem = divToDo.getElementsByClassName("todo-checkbox")[0];
    divToDo.addEventListener("click", clickedDivToModifyStyling.bind(null,inputElem, taskObj), false);
  }
};

//Modifys tasks when checkbox is clicked
function clickCheckBox(){
  for (i = 0; i < todos.length; i++){
    const inputElem = document.getElementsByClassName("todo-checkbox")[i];
    const task = todos[i];
    inputElem.onclick = function() {checked(inputElem,task)};
  }
};

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
      markTaskCompleteClickDiv()
    }
  })
};

function hideOrShowCompletedTasks(){
  button = document.getElementById("hideButton");
  buttonVal = button.value;

  if (buttonVal == "Hide completed items"){
    console.log("Need to hide tasks");
    //task is mark completed do not display
    //let uncompletedTaskList = [];
    for (i=0; i < todos.length; i++){
      let elem = document.getElementById("main-todo-list").firstElementChild;

      if (todos[i].complete == true){
        console.log("it works");
        console.log(elem);
        document.getElementById("main-todo-list").removeChild(elem);

      }
    }
    button.value = "Show completed items";
  }
  else if (buttonVal == "Show completed items"){
    console.log("Need to show hidden tasks");
    displayToDoList(todos)
    button.value = "Hide completed items";
  }
}

function addButtonToDoc(){
  //create div for button
  let buttonDiv =
  document.createElement("div");
  buttonDiv.id = "button";
  //create button and add to buttonDiv
  placeholder = document.getElementsByClassName("app")[0];
  placeholder.appendChild(buttonDiv);

  button = document.createElement("input");
  button.type = "button";
  button.id = "hideButton";
  button.value = "Hide completed items";
  buttonDiv.appendChild(button);
  button.addEventListener("click", hideOrShowCompletedTasks.bind());
}

createNewToDoListItem()
displayToDoList(todos)
setUp()
markTaskCompleteClickDiv()
clickCheckBox()
counter()
addButtonToDoc()
