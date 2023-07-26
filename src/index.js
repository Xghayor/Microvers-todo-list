import './style.css';
import { addTask } from './modules/addtask.js';
import { saveTasksToStorage, loadTasksFromStorage } from './modules/localstorage.js';
import clearFunction from './modules/clearfunction.js';

let tasks = loadTasksFromStorage();

const taskList = document.getElementById('todo-list'); // 
const taskInput = document.querySelector('.add-task input'); // 

function addTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    addTask(task, taskList, tasks);
  });
}

taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const description = taskInput.value.trim();

    if (description !== '') {
      const newTask = {
        description,
        completed: false,
        index: tasks.length,
      };

      tasks.push(newTask);
      taskInput.value = '';
      addTask(newTask, taskList, tasks);

      saveTasksToStorage(tasks);
    }
  }
});

const btnRefresh = document.getElementById('btn-refresh');
btnRefresh.addEventListener('click', () => {
  location.reload(); // Reload the page when the refresh button is clicked
});

const btnClear = document.querySelector('.clear-items button'); // Updated selector for the clear button
btnClear.addEventListener('click', () => {
  clearFunction(tasks);
});

document.addEventListener('DOMContentLoaded', () => {
  tasks = loadTasksFromStorage();
  addTasks();
});
