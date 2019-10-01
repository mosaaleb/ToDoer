import Controller from '../controller';
import Model from '../model';

const TasksView = (() => {
  const tasksCollection = document.getElementById('tasks');
  const form = document.createElement('form');

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

  const update = (tasks) => {
    tasksCollection.innerHTML = '';
    tasks.forEach((task, index) => {
      const taskItem = document.createElement('div');
      taskItem.innerHTML = `
        <h1>${task.title}</h1>
        <p>${task.description}</p>
        <p>${task.dueDate}</p>
        <br>
      `;
      const deleteButton = document.createElement('button');
      deleteButton.id = index;
      deleteButton.innerText = 'X';
      deleteButton.addEventListener('click', (event) => {
        Controller.removeTask(event.target.id);
        Model.removeTaskEvent.notify(Controller.getActiveProjectTasks());
      });
      taskItem.appendChild(deleteButton);
      tasksCollection.append(taskItem);
    });
    renderForm();
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskTitle = document.querySelector('.task-title').value;
    const taskDesc = document.querySelector('.task-desc').value;
    const taskDue = document.querySelector('.task-due').value;
    Controller.addTask(taskTitle, taskDesc, taskDue);
    Model.addTaskEvent.notify(Controller.getActiveProjectTasks());
    Model.addProjectEvent.notify(Controller.getProjects());
  });

  const init = (tasks) => {
    update(tasks);
  };

  return {
    init, update
  };
})();

export default TasksView;
