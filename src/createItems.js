const tasks = [{
  description: 'wash the dishes',
  completed: false,
  index: 0,
},
{
  description: 'complete to do list project',
  completed: false,
  index: 1,
}];

function createItems(tasks) {
  const todoList = document.getElementById('todo-list');

  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.classList.add('checking-box');

    checkbox.addEventListener('change', function () {
      task.completed = this.checked;
      listItem.classList.toggle('completed', this.checked);
    });

    listItem.appendChild(checkbox);

    const description = document.createElement('span');
    description.textContent = task.description;

    listItem.appendChild(description);

    if (task.completed) {
      listItem.classList.add('completed');
    }
    todoList.appendChild(listItem);

    const hr = document.createElement('hr');
    todoList.appendChild(hr);
  });
}
export { createItems, tasks };
