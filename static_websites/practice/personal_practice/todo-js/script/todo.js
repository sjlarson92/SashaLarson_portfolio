let todos = [
  {id: 1, text: "Take out trash and recycling", complete: true},
  {id: 2, text: "Pick up dry cleaning", complete: false},
  {id: 3, text: "Get oil change", complete: false},
  {id: 4, text: "Write thank-you notes", complete: false},
];
//Todo Item consturctor
let nextId = 5;
function Todo(text) {
  this.id = nextId++;
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
  document.getElementById("main-todo-list").removeChild(divToDo); //can i move this up to remvoe all previous div before adding new ones?
};

function addNewToDoItemToDisplay(newTodoItem){
  const divToDo = document.getElementsByClassName("todo")[0];
  var cln = divToDo.cloneNode(true);
  cln.className = "todo";
  cln.getElementsByClassName("todo-checkbox")[0].checked = false;
  cln.getElementsByClassName("todo-text")[0].innerHTML = newTodoItem.text;
  //set default styling
  cln.style.display = "";
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
    //stopBubbling(this.event);
    const divToDo = document.getElementsByClassName("todo")[i];
    const taskObj = todos[i];
    inputElem = divToDo.getElementsByClassName("todo-checkbox")[0];
    divToDo.addEventListener("click", clickedDivToModifyStyling.bind(null,inputElem, taskObj));
  }
};

function addClickDivtoNewTask(){
  stopBubbling(this.event);
  let divToDo = document.getElementsByClassName("todo-list")[0].lastElementChild;
  console.log(divToDo);
  const taskObj = todos[todos.length-1];
  console.log("This is the taskObj: ", taskObj);
  let inputElem = divToDo.getElementsByClassName("todo-checkbox")[0];
  console.log("This is the inputElem: ", inputElem);
  divToDo.addEventListener("click", clickedDivToModifyStyling.bind(null, inputElem, taskObj));

}

//Modifys tasks when checkbox is clicked
function clickCheckBox(){
  for (i = 0; i < todos.length; i++){
    const inputElem = document.getElementsByClassName("todo-checkbox")[i];
    const task = todos[i];
    inputElem.onclick = function() {checked(inputElem,task)};
  }
};

function addCheckBoxListenertoNewTask(){
  const divToDo = document.getElementsByClassName("todo-list")[0].lastElementChild;
  const taskObj = todos[todos.length-1];
  let inputElem = divToDo.getElementsByClassName("todo-checkbox")[0];
  inputElem.addEventListener("click", checked.bind(null, inputElem, taskObj));
}

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
      //this push is not updating todos array correctly
      inputTextElem.value = "";
      console.log("This is the new todoItem: ", newTodoItem);
      console.log("This is the new todo array: ", todos)

      addNewToDoItemToDisplay(newTodoItem)
      addClickDivtoNewTask()
      addCheckBoxListenertoNewTask()

    }
  })
};

function hideOrShowCompletedTasks(){
  button = document.getElementById("hideButton");
  buttonVal = button.value;
  let elemMainTodoList = document.getElementById("main-todo-list");
  console.log("The todos list is: ", todos);

  if (buttonVal == "Hide completed items"){
    console.log("Need to hide tasks");

    for (i=0; i < todos.length; i++){
      if (todos[i].complete == true){
        let currentTask = elemMainTodoList.getElementsByClassName("todo")[i];
        console.log(currentTask);
        currentTask.style.display = "none";
      }
    }
    button.value = "Show completed items";
  }

    //hide items on completedTasksList
  else if (buttonVal == "Show completed items"){
    console.log("Need to show hidden tasks");
    //add back the tasks that are on the completedTasksbyIDList
    for(i=0; i < todos.length; i++){
      if(todos[i].complete == true){
        let currentTask = elemMainTodoList.getElementsByClassName("todo")[i];
        console.log(currentTask);
        currentTask.style.display = "";
      }
    }
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

//TODO there is a bug that if hide completed items has been clicked then any new task added will not appear

createNewToDoListItem()
displayToDoList(todos)
setUp()
markTaskCompleteClickDiv()
clickCheckBox()
counter()
addButtonToDoc()
console.log("original todo list: ", todos);
