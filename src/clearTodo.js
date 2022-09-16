const todos = JSON.parse(localStorage.getItem('todo-list'));
const clearTask = document.querySelector('.clear-task');

export const update = (selectedTask) => {
  const taskName = selectedTask.parentElement.lastElementChild;
  const selectedElementOne = selectedTask.parentElement.parentElement.lastElementChild
    .lastElementChild.lastElementChild;
  const selectedElementTwo = selectedTask.parentElement.parentElement.lastElementChild
    .firstElementChild;
  const selectedElementThree = selectedTask.parentElement.parentElement;
  if (selectedTask.checked) {
    taskName.classList.add('checked');
    selectedElementOne.classList.add('trash');
    selectedElementTwo.classList.add('edit');
    selectedElementThree.classList.add('checkedColor');
    todos[selectedTask.id].isCompleted = 'True';
  } else {
    taskName.classList.remove('checked');
    selectedElementOne.classList.remove('trash');
    selectedElementTwo.classList.remove('edit');
    selectedElementThree.classList.remove('checkedColor');
    todos[selectedTask.id].isCompleted = 'False';
  }
  localStorage.setItem('todo-list', JSON.stringify(todos));
};

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

export const clearTasks = () => {
  clearTask.addEventListener('click', () => {
    todos.forEach((todo) => {
      if (todo.isCompleted) {
        removeCompletedFromUI();
        removeCompletedFromStorage();
        window.location.reload();
      }
    });
  });
};
