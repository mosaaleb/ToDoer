const TasksView = (() => {
  const tasksCollection = document.getElementById('tasks');
  const form = document.createElement('form');
  let handleAddTask = null;


  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskTitle = document.querySelector('.task-title').value;
    const taskDesc = document.querySelector('.task-desc').value;
    const taskDue = document.querySelector('.task-due').value;
    handleAddTask(taskTitle, taskDesc, taskDue);
  });

  const bindAddTask = (handler) => {
    handleAddTask = handler;
  };

  const renderForm = () => {
    form.innerHTML = '';
    const titleInput = document.createElement('input');
    const descriptionInput = document.createElement('input');
    const dueDateInput = document.createElement('input');
    const submitButton = document.createElement('button');

    titleInput.type = 'text';
    titleInput.placeholder = 'Task title';
    titleInput.className = 'task-title';
    descriptionInput.type = 'text';
    descriptionInput.placeholder = 'Task description';
    descriptionInput.className = 'task-desc';
    dueDateInput.type = 'date';
    dueDateInput.className = 'task-due';
    submitButton.textContent = 'Add Event';

    form.append(titleInput, descriptionInput, dueDateInput, submitButton);
    tasksCollection.appendChild(form);
  };

  const render = (tasks) => {
    tasksCollection.innerHTML = '';
    tasks.forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.innerHTML = `
        <h1>${task.title}</h1>
        <p>${task.description}</p>
        <p>${task.dueDate}</p>
        <br>
      `;
      tasksCollection.append(taskItem);
    });
    renderForm();
  };

  const init = (tasks) => {
    render(tasks);
  };

  return { init, render, bindAddTask };
})();

export default TasksView;
