function addTask() {
  const taskText = document.getElementById('task').value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
    document.getElementById('pending-tasks').appendChild(taskItem);
    document.getElementById('task').value = '';
  }
}

function completeTask(button) {
  const taskItem = button.parentNode;
  taskItem.querySelector('span').classList.add('completed');
  const completedList = document.getElementById('completed-tasks');
  completedList.appendChild(taskItem);
  taskItem.removeChild(button);
}

function editTask(button) {
  const taskItem = button.parentNode;
  const taskText = taskItem.querySelector('span');
  const newText = prompt('Edit the task:', taskText.textContent);
  if (newText !== null) {
    taskText.textContent = newText;
  }
}

function deleteTask(button) {
  const taskItem = button.parentNode;
  taskItem.parentNode.removeChild(taskItem);
}
