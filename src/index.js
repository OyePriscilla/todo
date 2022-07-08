import './index.css';
import refreshPage from './refresh.js';

const addText = document.querySelector('#add-text');
let todos = JSON.parse(localStorage.getItem('todo-list'));
const todoTask = document.querySelector('.todo-task');
const clearTask = document.querySelector('.clear-task');

refreshPage();

const removeCompletedFromUI = () => {
  const allCompleted = document.querySelectorAll('.checkedColor');
  allCompleted.forEach((completed) => {
    completed.remove();
  });
};

const removeCompletedFromStorage = () => {
  const todosLeft = todos.filter((todo) => (todo.isCompleted === false));
  todosLeft.forEach((td, index) => {
    td.idx = index;
  });
  localStorage.setItem('todo-list', JSON.stringify(todosLeft));
};

const displayTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      li += `
      <div class = todo-dynamic>
      <label for id = "${id}" class="todo-input">
          <input onclick = 'update(this)' class = 'check-task' type = "checkbox" id = "${id}">
          <p class = "todo-text">${todo.description}</p>
      </label>
      <div class= "settings">
         <i class = "fa fa-ellipsis-v"></i>
        <div class = "delete">
        <i onclick = "deleteTask(${id})" class = "fa fa-trash"></i>
        </div>
      </div>
  </div>
      `;
    });
  }
  todoTask.innerHTML = li;
};

displayTodo();

const deleteTask = (deleteId) => {
  todos.splice(deleteId, 1);
  displayTodo();
  localStorage.setItem('todo-list', JSON.stringify(todos));
  window.location.reload();
};

window.deleteTask = deleteTask;

const update = (selectedTask) => {
  const taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked) {
    taskName.classList.add('checked');
    selectedTask.parentElement.parentElement.lastElementChild.lastElementChild
      .lastElementChild.classList.add('trash');
    selectedTask.parentElement.parentElement.lastElementChild.firstElementChild.classList.add('edit');
    selectedTask.parentElement.parentElement.classList.add('checkedColor');
    todos[selectedTask.id].isCompleted = 'True';
  } else {
    taskName.classList.remove('checked');
    selectedTask.parentElement.parentElement.lastElementChild.lastElementChild
      .lastElementChild.classList.remove('trash');
    selectedTask.parentElement.parentElement.lastElementChild.firstElementChild.classList.remove('edit');
    selectedTask.parentElement.parentElement.classList.remove('checkedColor');
    todos[selectedTask.id].isCompleted = 'False';
  }
  localStorage.setItem('todo-list', JSON.stringify(todos));
};

window.update = update;

const addT = () => {
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

addT();

const saveEditTextToStorage = (task, newTask) => {
  const tasks = JSON.parse(localStorage.getItem('todo-list'));
  tasks.forEach((t) => {
    if (task === t.description) {
      t.description = newTask;
    }
    localStorage.setItem('todo-list', JSON.stringify(tasks));
  });
};

const editList = () => {
  const allThreeDotBtn = document.querySelectorAll('.fa-ellipsis-v');
  allThreeDotBtn.forEach((threeDotBtn) => {
    threeDotBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const taskEdit = threeDotBtn.parentElement.parentElement.firstElementChild.lastElementChild;
      const oldTask = taskEdit.textContent;
      taskEdit.toggleAttribute('contentEditable');
      taskEdit.focus();
      threeDotBtn.parentElement.parentElement.classList.toggle('checkedColor');
      taskEdit.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          taskEdit.removeAttribute('contentEditable');
          threeDotBtn.parentElement.parentElement.classList.remove('checkedColor');
          const newTask = taskEdit.textContent;
          saveEditTextToStorage(oldTask, newTask);
        }
      });
    });
  });
};

editList();

clearTask.addEventListener('click', () => {
  todos.forEach((todo) => {
    if (todo.isCompleted) {
      removeCompletedFromUI();
      removeCompletedFromStorage();
    }
  });
});
