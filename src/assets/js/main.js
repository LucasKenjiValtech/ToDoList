var buttonModal;
var imgButtonModal;
var modal;
var taskInput;
var addTaskButton;
var toDoList;
var completedList;

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

function createTask(){
    let inputValue = taskInput.value;
    taskInput.value = ""

    if(validateTask(inputValue)){
        inspectList(inputValue)
    }else{
        alert("Digite algo antes de adicionar uma tarefa")
    }
    
}

function validateTask(value){
    if(value.length > 0){
        return true;
    }else{
        return false;
    }
}

function inspectList(value){
    if(toDoList.children.length == 0){
        insertElement(false, value, toDoList)
    }
    else{
        insertElement(true, value, toDoList)
    }
}

function insertElement(hasChild, value, list){
    let task = document.createElement("label")
    task.id = value;
    task.innerHTML = `
        <input type="checkbox">
        <div>${value}</div>`
    
    if(hasChild){
        for(i = 0; i < list.children.length; i++){
            if(task.id < list.children[i].id){
                list.children[i].before(task);
            }
        }
    }else{
        list.append(task);
    }

    toggleModal();
    console.log(list)
}

