import TasksView from './tasksView';
import ProjectsView from './projectsView';

const UserInterface = (() => {
  const init = (projects) => {
    // PROJECTS
    const navBar = document.querySelector('.navbar');
    const navList = ProjectsView.renderProjects(projects);
    navBar.appendChild(navList);
    // TASKS
    const tasksContainer = document.querySelector('#tasks');
    const taskList = TasksView.renderTasks(projects[0]);
    tasksContainer.appendChild(taskList);
  };

  return { init };
})();

export default UserInterface;
