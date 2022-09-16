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

export default editList;