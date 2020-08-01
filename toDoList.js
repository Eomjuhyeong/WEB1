const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos"; 

function paintToDos(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "삭제버튼";

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentToDos = toDoInput.value;
    paintToDos(currentToDos);
    toDoInput.value = "";
}

function init(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos === null){

    }
    toDoForm.addEventListener("submit", handleSubmit);
}
init();