const taskInput = document.getElementById("taskInput");
const tasks = document.getElementById("tasks");

function addTask() {
  let newTask = document.createElement("div");
  newTask.classList.add("taskList");
  newTask.innerHTML = taskInput.value;
  tasks.appendChild(newTask);
}
