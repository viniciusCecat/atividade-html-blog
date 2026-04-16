const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});
