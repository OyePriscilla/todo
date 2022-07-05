import './index.css';

const todoArray = [
  {
    description: 'Go to Church',
    completed: 'true',
    index: 1,
  },

  {
    description: 'Wash dishes',
    completed: 'false',
    index: 2,
  },

  {
    description: 'Learn Music',
    completed: 'true',
    index: 3,
  },
];

const todoTask = document.querySelector('.todo-task');

const todo = () => {
  todoTask.innerHTML = '';
  for (let i = 0; i < todoArray.length; i += 1) {
    todoTask.innerHTML += `
    <div class = todo-dynamic>
       <div class="todo-input">
           <input type = "checkbox" name = "" id = "">
           <p>${todoArray[i].description}</p>
       </div>
       <div>
           <i class = "fa fa-ellipsis-v"></i>
       </div>
   </div>
       `;
  }
};
todo();