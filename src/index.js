import './style.css';
import { createItems } from './createItems.js';
import { addTask } from './addItem.js';
import {
  getTasks, saveTasks, clearCompletedTasks,
} from './taskManager.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasks();
  createItems();
});

const clearButton = document.querySelector('.clear-items button');

clearButton.addEventListener('click', () => {
  clearCompletedTasks();
  saveTasks();
  createItems();
});

const addButton = document.querySelector('.add-task button');
const inputField = document.getElementById('add-tasks');

addButton.addEventListener('click', addTask);
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
