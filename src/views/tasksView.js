import Controller from '../controller';

const TasksView = (() => {
  const tasks = Controller.getActiveProjectTasks();
  const tasksCollection = document.getElementById('tasks');

  const render = () => {
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
  };

  const init = () => {
    render();
  };

  return { init, render };
})();

TasksView.init();

export default TasksView;
