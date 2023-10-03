const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">${task.text}</span>
            <button onclick="toggleTask(${index})">${task.completed ? "Undo" : "Done"}</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        saveTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
}


function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();
