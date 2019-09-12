import TasksView from './tasksView';
import Controller from '../controller';

const ProjectsView = (() => {
  const projects = Controller.getProjects();
  const navBar = document.getElementById('projects');
  const navList = document.createElement('ul');

  const render = () => {
    projects.forEach((project) => {
      const projectItem = document.createElement('li');
      projectItem.textContent = project.name;
      projectItem.addEventListener('click', TasksView.render);
      navList.appendChild(projectItem);
    });
  };

  const init = () => {
    navBar.appendChild(navList);
    render();
  };

  return { init, render };
})();

export default ProjectsView;
