var buttonModal;
var imgButtonModal;
var modal;
var taskInput;
var addTaskButton;
var toDoList;
var completedList;

var toDoArray = [];
var completedArray = [];

InitElements();

function InitElements() {
    buttonModal = document.getElementById("buttonModal");
    modal = document.getElementById("form-modal");
    imgButtonModal = document.querySelector("#buttonModal img");

    taskInput = document.getElementById("taskInput");
    addTaskButton = document.getElementById("addTask");

    toDoList = document.querySelector("#to-do-itens .content")
    completedList = document.querySelector("#completed-itens .content");
}

function toggleModal(){
    buttonModal.classList.toggle("plus-button-close");
    
    modal.classList.toggle("modal-opened");
    modal.classList.toggle("modal-closed");

    if(buttonModal.classList.contains("plus-button-close")){
        imgButtonModal.src = "src/assets/img/DarkPlus.svg"
    }else{
        imgButtonModal.src = "src/assets/img/Plus.svg";
    }
}

function CreateTask(){
    let inputValue = taskInput.value;
    taskInput.value = ""

    if(ValidateTask(inputValue)){
        InsertElementToDo(inputValue, toDoArray ,toDoList)
    }else{
        alert("Digite algo antes de adicionar uma tarefa")
    }
    
}

function ValidateTask(value){
    if(value.length > 0){
        return true;
    }else{
        return false;
    }
}

function FirstLetterUppercase(text){
    var result = text.toLowerCase();
    return result.charAt(0).toUpperCase() + result.slice(1);
}

function InsertElementToDo(value){
    toDoArray.push(FirstLetterUppercase(value));
    toDoArray.sort();

    RefreshToDo();
   
    toggleModal();
}

function RefreshToDo(){
    toDoList.innerHTML = "";

    for(i = 0; i < toDoArray.length; i++){
        let task = CreateElementToDo(toDoArray[i]);
        toDoList.append(task);  
    }
}

function CreateElementToDo(value){
    let task = document.createElement("label")
    task.id = value;
    task.innerHTML = `
        <input type="checkbox">
        <div>${value}</div>`
    task.children[0].addEventListener("click", ToggleTask)
    return task;
}

function ToggleTask(){
    let taskName = this.parentElement.id
    if(this.checked == true){
        CompleteTask(taskName);
    }else{
        UncompleteTask(taskName);
    }
}

function CompleteTask(name){
    let toDoIndex = toDoArray.indexOf(name)
    toDoArray.splice(toDoIndex, 1);
    InsertElementCompleted(name)
    RefreshToDo();
}

function UncompleteTask(name){
    let completedIndex = completedArray.indexOf(name)
    completedArray.splice(completedIndex, 1);
    InsertElementUncompleted(name)
    RefreshToDo();
}

function InsertElementUncompleted(value){
    toDoArray.push(FirstLetterUppercase(value));
    toDoArray.sort();
    RefreshCompleted();
}


function InsertElementCompleted(value){
    completedArray.push(FirstLetterUppercase(value));
    completedArray.sort();

    RefreshCompleted();
}

function RefreshCompleted(){
    completedList.innerHTML = "";

    for(i = 0; i < completedArray.length; i++){
        let task = CreateElementCompleted(completedArray[i]);
        completedList.append(task);  
    }
}

function CreateElementCompleted(value){
    let task = document.createElement("label")
    task.id = value;
    task.innerHTML = `
        <input type="checkbox">
        <div>${value}</div>`
    task.children[0].addEventListener("click", ToggleTask)
    task.classList.add("completed")
    task.children[0].checked = true;
    return task;
}

