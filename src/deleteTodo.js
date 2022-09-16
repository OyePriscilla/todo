import displayTodo from './displaytodo.js';

const todos = JSON.parse(localStorage.getItem('todo-list'));

const deleteTask = (deleteId) => {
  todos.splice(deleteId, 1);
  displayTodo();
  localStorage.setItem('todo-list', JSON.stringify(todos));
  window.location.reload();
};

export default deleteTask;