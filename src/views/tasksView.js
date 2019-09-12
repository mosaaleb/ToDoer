import Controller from '../controller';

const TasksView = (() => {
  const tasks = Controller.getActiveProjectTasks();
  const tasksCollection = document.getElementById('tasks');

  const render = () => {
    tasks.forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.innerHTML = `
        <h1>${task.title}</h1>
        <p>${task.description}</p>
        <p>${task.dueDate}</p>
        <p>${task.priority}</p>
        <p>${task.taskDone}</p>
      `;
      tasksCollection.append(taskItem);
    });
  };

  const init = () => {
    render();
  };

  // const renderTasks = (project) => {
  //   const list = document.createElement('ul');
  //   project.tasks.forEach((task) => {
  //     list.innerHTML += `
  //       <li>${task.title}</li>
  //     `;
  //   });
  //   return list;
  // };

  return { init, render };
})();

export default TasksView;
