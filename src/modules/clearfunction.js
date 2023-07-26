import { saveToLocalStorage, updateTaskIndexesInStorage } from './localstorage.js';

function clearCompletedTasks(taskList) {
  const completedTasks = taskList.filter((task) => task.completed === true);
  const indexesToRemove = completedTasks.map((task) => task.index);
  indexesToRemove.reverse().forEach((indexToDelete) => {
    taskList.splice(indexToDelete, 1);
  });
  updateTaskIndexesInStorage(taskList);
  saveToLocalStorage(taskList);

  completedTasks.forEach((task) => {
    const taskElement = document.getElementById(`task-${task.index}`);
    if (taskElement) {
      taskElement.remove();
    }
  });
}

export default clearCompletedTasks;
