let input = document.getElementById('input-box');
let todoList = document.querySelector(".list");

let tasks = [];

// Interface of List
const taskInterface = (value) => ({
  task: value,
  completed: false
});

const inputTask = (value) => {
  if (value === '') return false;

  tasks.push(taskInterface(value));
  input.value = "";
  console.log(tasks);
  renderList();
}

// Add input 
input.addEventListener("keydown", (e) => {
  if (e.code === 'Enter') {
    inputTask(e.target.value)
  }
});

const renderList = () => {
  todoList.innerHTML = ""; // Clear the list before rendering

  tasks.forEach((task, index) => {
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'list_item');

    const Checkbtn = document.createElement('div');
    Checkbtn.setAttribute('class', 'task_check_btn');
    Checkbtn.innerHTML = task.completed ? "not done" : "done"; // Updated this line

    const taskItem = document.createElement('div');
    taskItem.setAttribute('class', 'task_item');
    taskItem.style.cssText = "display: flex; gap:5px";

    const taskTitle = document.createElement('span');
    taskTitle.setAttribute('class', 'title');
    taskTitle.innerHTML = task.task;

    const taskAction = document.createElement('span');
    taskAction.appendChild(Checkbtn);

    Checkbtn.addEventListener('click', () => {
      task.completed = !task.completed;
      Checkbtn.innerHTML = task.completed ? "not done" : "done"; // Updated this line
      renderList();
    });

    if (task.completed) {
      taskTitle.style.textDecoration = 'line-through'; // Add strikethrough for completed tasks
    }

    taskItem.append(taskTitle, taskAction);
    listItem.append(taskItem);
    todoList.append(listItem);
  });
}

// Initial rendering
renderList();
