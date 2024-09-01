// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const node = document.querySelector('ul');
console.log(todoList);
let nextId = Math.max(...todoList.map((item) => item.id)) + 1;

const addItems = () => {
  node.innerHTML = '';
  for (const task of todoList) {
    const liNode = document.createElement('li');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `todo-${task.id}`;
    input.checked = task.completed;
    input.addEventListener('click', () => {
      task.completed = !task.completed;
      console.log(todoList);
    });

    const label = document.createElement('label');
    label.htmlFor = `todo-${task.id}`;
    label.textContent = `${task.task}`;

    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.addEventListener('click', () => {
      const index = todoList.findIndex((t) => t.id === task.id);
      todoList.splice(index, 1);
      node.removeChild(liNode);
      console.log(todoList);
    });

    liNode.append(input, label, btn);
    node.appendChild(liNode);
  }
};
const addItem = document.querySelector('.add-btn');
const modal = document.querySelector('dialog');
addItem.addEventListener('click', () => {
  modal.showModal();
});

const addBtn = document.querySelector('dialog > form > button');
const inputField = document.querySelector('dialog > form > input');

const pushNewItem = (newItem) => {
  todoList.push(newItem);
  modal.close();
  addItems();
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newItem = {
    id: nextId++,
    task: inputField.value,
    completed: false,
  };
  inputField.value == ''
    ? confirm('You need to write something to add')
      ? ''
      : modal.close()
    : pushNewItem(newItem);
  inputField.value = '';
  console.log(todoList);
});

addItems();
