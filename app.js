// list of tasks
let tasks = [];

// add new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push({ name: task, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

// toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    if (task.completed) {
      li.classList.add('completed');
    }
    li.addEventListener('click', () => toggleTask(index));
    taskList.appendChild(li);
  });
}

// event listener
document.getElementById('addTaskBtn').addEventListener('click', addTask);
