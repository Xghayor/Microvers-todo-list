const { JSDOM } = require('jsdom');
const { addTask } = require('./addtask.js');

describe('addTask', () => {
  let taskList;
  let tasks;

  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;

    taskList = document.createElement('ul');
    tasks = [];
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('creates exactly one <li> element', () => {
    const task = {
      description: 'Sample task',
      completed: false,
    };

    addTask(task, taskList, tasks);

    const liElements = taskList.querySelectorAll('li');

    expect(liElements.length).toBe(1);
  });
});