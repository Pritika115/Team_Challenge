const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const taskList = document.getElementById("taskList");
const status = document.getElementById("status");

document.addEventListener("DOMContentLoaded", loadTasks);
addBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener("click", clearAllTasks);

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        status.textContent = "Please enter a valid task!";
        return;
    }
    const li = createTaskElement(text);
    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
    status.textContent = "Task added successfully!";
}

function createTaskElement(text) {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
    });

    li.appendChild(delBtn);
    return li;
}
