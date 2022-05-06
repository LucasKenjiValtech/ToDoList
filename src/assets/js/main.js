const buttonModal = document.getElementById("buttonModal");
const modal = document.getElementById("form-modal");
const imgButtonModal = document.querySelector("#buttonModal img");

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");

const toDoList = document.querySelector("#to-do-itens .content")
const completedList = document.querySelector("#completed-itens .content");

const toDoArray = [];
const completedArray = [];

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
        InsertElementToDo(inputValue)
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
    let result = text.toLowerCase();
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

    toDoArray.forEach((toDo) => {
        let task = CreateElementToDo(toDo);
        toDoList.append(task);  
    }) 
}

function CreateElementToDo(value){
    let task = document.createElement("label");
    task.id = value;

    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("click", ToggleTask);
    task.append(input);

    let text = document.createElement("div")
    text.textContent = value;
    task.append(text)
    
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

    completedArray.forEach((completed) => {
        let task = CreateElementCompleted(completed);
        completedList.append(task);  
    }) 
}

function CreateElementCompleted(value){
    let task = document.createElement("label");
    task.classList.add("completed")
    task.id = value;

    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = true;
    input.addEventListener("click", ToggleTask);
    task.append(input);

    let text = document.createElement("div")
    text.textContent = value;
    task.append(text)

    return task;
}
