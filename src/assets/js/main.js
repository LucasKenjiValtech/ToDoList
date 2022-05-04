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
        InsertElement(inputValue, toDoArray ,toDoList)
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


function InsertElement( value, array, list){
    array.push(value);
    array.sort();
    list.innerHTML = "";

    for(i = 0; i < array.length; i++){
        let task = CreateElement(array[i]);
        list.append(task);
        
    }
   
    toggleModal();
}

function CreateElement(value){
    let task = document.createElement("label")
    task.id = value;
    task.innerHTML = `
        <input type="checkbox">
        <div>${value}</div>`
    return task;
}

