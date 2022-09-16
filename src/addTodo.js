import displayTodo from './displaytodo.js';

const addText = document.querySelector('#add-text');
let todos = JSON.parse(localStorage.getItem('todo-list'));

const addTodos = () => {
  addText.addEventListener('keyup', (e) => {
    const userTask = e.target.value.trim();
    if (e.key === 'Enter' && userTask) {
      if (!todos) {
        todos = [];
      }
      addText.value = '';
      const taskInfo = {
        description: userTask,
        isCompleted: false,
        idx: todos.length,
      };
      todos.push(taskInfo);
      localStorage.setItem('todo-list', JSON.stringify(todos));
      displayTodo();
      window.location.reload();
    }
  });
};

export default addTodos;