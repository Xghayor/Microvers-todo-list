import * as TaskManager from './taskManager.js';
import { createItems } from './createItems.js';

function addTask() {
  const inputField = document.getElementById('add-tasks');
  const description = inputField.value;

  if (description.trim() === '') {
    return;
  }
  TaskManager.addTask(description);
  TaskManager.saveTasks();

  inputField.value = '';

  createItems();
}
// eslint-disable-next-line import/prefer-default-export
export { addTask };
