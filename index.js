// Retrieve HTML elements
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskDueDateInput = document.getElementById('task-due-date');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;
  const dueDate = taskDueDateInput.value;

  if (title && description && dueDate) {
    const task = { title, description, dueDate };
    tasks.push(task);
    updateTaskList();
    clearInputFields();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

// Function to update the task list display
function updateTaskList() {
  taskList.innerHTML = '';

  for(let i = 0; i < tasks.length; i++){
    const li = document.createElement('li');
    li.innerHTML = `<div class="task-card">
        <h3 class="task-title">${tasks[i].title}</h3>
        <p class="task-description">${tasks[i].description}</p>
        <p class="task-date">${tasks[i].dueDate}</p>
        <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
    </div>
    `;
    taskList.appendChild(li);    
  }
}

// Function to clear input fields
function clearInputFields() {
  taskTitleInput.value = '';
  taskDescriptionInput.value = '';
  taskDueDateInput.value = '';
}

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);
