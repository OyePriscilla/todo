import './index.css';

const addText = document.querySelector('#add-text');
let todos = JSON.parse(localStorage.getItem('todo-list'));
const todoTask = document.querySelector('.todo-task');

const displayTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      li += `
      <div class = todo-dynamic>
      <label for id = "${id}" class="todo-input">
          <input onclick = 'update(this)' class = 'check-task' type = "checkbox" id = "${id}">
          <p class = "todo-text">${todo.description} </p>
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
  }
});

const editList = () => {
  const allThreeDotBtn = document.querySelectorAll('.fa-ellipsis-v');
  allThreeDotBtn.forEach((threeDotBtn) => {
    threeDotBtn.addEventListener('click', () => {
      const taskEdit = threeDotBtn.parentElement.parentElement.firstElementChild.lastElementChild;
      taskEdit.toggleAttribute('contentEditable');
      taskEdit.focus();
      threeDotBtn.parentElement.parentElement.classList.toggle('checkedColor');
      localStorage.setItem('todo-list', JSON.stringify(todos));
    });
  });
};

editList();