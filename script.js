document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('task');
  const addTaskButton = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');

  addTaskButton.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
              <span>${taskText}</span>
              <span class="delete">Delete</span>
          `;
          taskList.appendChild(listItem);
          taskInput.value = '';

          const deleteButton = listItem.querySelector('.delete');
          deleteButton.addEventListener('click', function () {
              taskList.removeChild(listItem);
          });
      }
  });

  taskInput.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
          addTaskButton.click();
      }
  });
});
