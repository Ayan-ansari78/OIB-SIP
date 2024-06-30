let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const task = {
            text: taskText,
            completed: false,
            timestamp: new Date().toLocaleString()
        };
        tasks.push(task);
        renderTasks();
        taskInput.value = "";
    }
}

function renderTasks() {
    const pendingTasksList = document.getElementById("pendingTasks");
    const completedTasksList = document.getElementById("completedTasks");
    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${task.text} - ${task.timestamp}`;
        listItem.className = task.completed ? "completed" : "";
        
        const deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.className = "delete";
        deleteButton.onclick = () => deleteTask(index);
        listItem.appendChild(deleteButton);

        listItem.onclick = () => toggleTask(index);
        
        if (task.completed) {
            completedTasksList.appendChild(listItem);
        } else {
            pendingTasksList.appendChild(listItem);
        }
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
