import { addToDo, removeToDo } from '../__mocks__/functions.js';

describe('add and delete to-do items', () => {
  test('adds item to the list', () => {
    const list = [];
    const item = {
      task: 'wash laundry',
      completed: false,
      index: 1,
    };
    addToDo(list, item);
    expect(list).toHaveLength(1);
  });

  test('removes item from array', () => {
    const listArr = [
      { task: 'laundry1', completed: false, index: 1 },
      { task: 'laundry2', completed: false, index: 2 },
      { task: 'laundry3', completed: false, index: 3 },
    ];

    removeToDo(listArr, 1);
    expect(listArr).toHaveLength(2);
  });
});
