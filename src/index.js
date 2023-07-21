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
  // Add the 'clicked' class when the button is clicked
  document.getElementById('btn-refresh').classList.add('clicked');

  // After a short delay, reload the page and then remove the 'clicked' class to reset the button to its original state
  setTimeout(() => {
    window.location.reload();
    document.getElementById('btn-refresh').classList.remove('clicked');
  }, 300); // Adjust the delay to match the transition duration
});