const todos = JSON.parse(localStorage.getItem('todo-list'));
const todoTask = document.querySelector('.todo-task');

const displayTodo = () => {
  let li = '';
  if (todos) {
    todos.forEach((todo, id) => {
      li += `
        <div class=todo-dynamic>
        <label for id="${id}" class="todo-input">
            <input onclick='update(this)' class ='check-task' type="checkbox" id="${id}">
            <p class="todo-text">${todo.description}</p>
        </label>
        <div class= "settings">
           <i class="fa fa-ellipsis-v"></i>
          <div class="delete">
          <i onclick="deleteTask(${id})" class="fa fa-trash"></i>
          </div>
        </div>
    </div>
        `;
    });
  }
  todoTask.innerHTML = li;
};

export default displayTodo;