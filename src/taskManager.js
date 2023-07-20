// eslint-disable-next-line import/no-mutable-exports
let tasks = [];

function getTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(description) {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(task);
}

function removeTask(index) {
  tasks.splice(index, 1);
}

function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
}

export {
  tasks, getTasks, saveTasks, addTask, removeTask, clearCompletedTasks,
};
