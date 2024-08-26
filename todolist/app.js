const inputTodo = document.querySelector(".input-todo");
const taskContainer = document.querySelector(".task-container");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", addTask);

function get() {
  taskContainer.innerHTML = localStorage.getItem("task");
}

get();

function addTask() {
  if (inputTodo.value.trim().length === 0) {
    inputTodo.value = "";
  } else {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div-container");

    let checkBtnEl = document.createElement("button");
    checkBtnEl.classList.add("check-btn");

    let checkEl = document.createElement("i");
    checkEl.classList.add("fa-solid", "fa-check");

    checkBtnEl.appendChild(checkEl);

    let value = inputTodo.value;
    let liEL = document.createElement("li");
    liEL.classList.add("listArray");
    liEL.textContent = value;

    let deleteBtnEl = document.createElement("button");
    deleteBtnEl.classList.add("del-btn");

    let deleteEl = document.createElement("i");
    deleteEl.classList.add("fa-solid", "fa-trash");

    deleteBtnEl.appendChild(deleteEl);

    taskDiv.appendChild(checkBtnEl);
    taskDiv.appendChild(liEL);
    taskDiv.appendChild(deleteBtnEl);

    taskContainer.appendChild(taskDiv);

    inputTodo.value = "";

    save();
  }
}

taskContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("check-btn")) {
    e.target.nextElementSibling.classList.toggle("line-through");
    e.target.classList.toggle("checked");
    save();
  }

  if (e.target.classList.contains("del-btn")) {
    e.target.parentElement.remove();
    save();
  }
});

function save() {
  localStorage.setItem("task", taskContainer.innerHTML);
}
