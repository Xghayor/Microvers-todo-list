let tasks = [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskDescription(index, newDescription) {
  tasks[index].description = newDescription.trim();
  saveTasks();
}

function toggleCompleted(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  const listItem = document.querySelectorAll('.list-item')[index];
  listItem.classList.toggle('completed');
}

function editTask(index) {
  const listItem = document.querySelectorAll('.list-item')[index];
  const taskDesc = listItem.querySelector('input[type="text"]');
  const removeBtn = listItem.querySelector('#delBtn');
  const editBtn = listItem.querySelector('.fa-ellipsis-v');

  removeBtn.style.display = 'block';
  editBtn.style.display = 'block';

  taskDesc.focus();
}

function updateIndexes() {
  tasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateIndexes();
  saveTasks();
  // eslint-disable-next-line no-use-before-define
  showTasks();
}

function showTasks() {
  const taskList = document.getElementById('todo-list');
  taskList.innerHTML = '';

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      toggleCompleted(index);
    });

    const taskDesc = document.createElement('input');
    taskDesc.id = 'myInput';
    taskDesc.type = 'text';
    taskDesc.value = task.description;
    taskDesc.addEventListener('input', (event) => {
      updateTaskDescription(index, event.target.value);
    });

    const removeBtn = document.createElement('button');
    removeBtn.id = 'delBtn';
    removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    removeBtn.addEventListener('click', () => {
      deleteTask(index);
    });

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    editBtn.addEventListener('click', () => {
      editTask(index);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDesc);
    listItem.appendChild(removeBtn);
    listItem.appendChild(editBtn);
    listItem.classList.add(task.completed ? 'completed' : 'uncompleted');
    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskInput = document.querySelector('.add-task input');
  const description = taskInput.value.trim();

  if (description !== '') {
    const newTask = {
      description,
      completed: false,
      index: tasks.length + 1,
    };

    tasks.push(newTask);
    taskInput.value = '';
    saveTasks();
    showTasks();
  }
}

function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  updateIndexes();
  saveTasks();
  showTasks();
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    addTask();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  showTasks();
});

export {

  showTasks,
  addTask,
  deleteTask,
  toggleCompleted,
  updateTaskDescription,
  editTask,
  clearCompletedTasks,
  handleKeyPress,
};
