import './index.css';
import refreshPage from './refresh.js';
import editList from './edittask.js';
import displayTodo from './displaytodo.js';
import deleteTask from './deleteTodo.js';
import addTodos from './addTodo.js';
import { update, clearTasks } from './clearTodo.js';

refreshPage();
addTodos();
displayTodo();
window.deleteTask = deleteTask;
editList();
window.update = update;
clearTasks();
