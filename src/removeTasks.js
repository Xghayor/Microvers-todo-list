import { removeTask } from './taskManager.js';
import { createItems } from './createItems.js';

document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains('checking-box')) {
    const listItem = clickedElement.parentNode;
    const index = Array.from(listItem.parentNode.children).indexOf(listItem);
    if (index !== -1) {
      removeTask(index);
      createItems();
    }
  }
});
