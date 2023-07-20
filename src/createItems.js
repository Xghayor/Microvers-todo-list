import { tasks } from './taskManager.js';

function createItems() {
  const todoList = document.getElementById('todo-list');

  todoList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.id = `task-${index}`;
    listItem.classList.add('list-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.classList.add('checking-box');

    checkbox.addEventListener('change', function () {
      task.completed = this.checked;
      listItem.classList.toggle('completed', this.checked);
    });

    const description = document.createElement('span');
    description.textContent = task.description;
    description.classList.add('description');

    const ellipsis = document.createElement('span');
    ellipsis.textContent = '...';
    ellipsis.classList.add('ellipsis');

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(description);

    listItem.appendChild(itemContainer);
    listItem.appendChild(ellipsis);

    todoList.appendChild(listItem);

    const hr = document.createElement('hr');
    todoList.appendChild(hr);
  });
}
// eslint-disable-next-line import/prefer-default-export
export { createItems };
