import Controller from '../controller';
import Model from '../model';
import tasksTemplate from '../hbs/tasks.hbs';

const TasksView = (() => {
  const update = (tasks) => {
    const tasksElement = document.querySelector('.tasks');
    tasksElement.innerHTML = tasksTemplate({ tasks });

    const deleteButtons = document.querySelectorAll('.task-delete-button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        Controller.removeTask(event.target.parentElement.id);
        Model.removeTaskEvent.notify(Controller.getActiveProjectTasks());
      });
    });

    const taskForm = document.querySelector('#task-form');
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskTitle = document.querySelector('.task-title').value;
      const taskDesc = document.querySelector('.task-desc').value;
      const taskDue = document.querySelector('.task-due').value;
      Controller.addTask(taskTitle, taskDesc, taskDue);
      Model.addTaskEvent.notify(Controller.getActiveProjectTasks());
      Model.addProjectEvent.notify(Controller.getProjects());
    });
  };

  const init = (tasks) => {
    update(tasks);
  };

  return {
    init, update
  };
})();

export default TasksView;
