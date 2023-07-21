import './style.css';
import {
  showTasks, addTask, clearCompletedTasks, handleKeyPress,
} from './modules/taskManager.js';

document.addEventListener('DOMContentLoaded', () => {
  showTasks();
});

document.querySelector('#arrow-btn').addEventListener('click', addTask);
document.querySelector('.add-task input').addEventListener('keypress', handleKeyPress);
document.querySelector('.clear-items button').addEventListener('click', clearCompletedTasks);

document.getElementById('btn-refresh').addEventListener('click', () => {
  location.reload();
});