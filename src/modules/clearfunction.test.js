import clearCompletedTasks from './clearfunction.js';
import * as localstorage from './localstorage.js'; 

const { JSDOM } = require('jsdom');

jest.mock('./localstorage', () => ({
  saveToLocalStorage: jest.fn(), 
  updateTaskIndexesInStorage: jest.fn(), 
}));

describe('clearCompletedTasks', () => {
  let tasks;

  beforeEach(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;

    tasks = [
      {
        description: 'Task 0',
        completed: true,
        index: 0,
      },
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: true,
        index: 2,
      },
    ];
  });

  afterEach(() => {
    global.document = undefined;
  });

  test('should remove completed tasks from the tasks array', () => {
    clearCompletedTasks(tasks);

    expect(tasks).toEqual([
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
    ]);
  });
});
