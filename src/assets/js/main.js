var buttonModal;
var imgButtonModal;
var modal;
var taskInput;
var addTaskButton;
var taskList;
var completedList

InitElements();

function InitElements() {
    buttonModal = document.getElementById("buttonModal");
    modal = document.getElementById("form-modal");
    imgButtonModal = document.querySelector("#buttonModal img");
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