import TasksView from './tasksView';

const ProjectsView = (() => {
  const renderProjects = (projects) => {
    const navList = document.createElement('ul');

    projects.forEach((project) => {
      const listElement = document.createElement('li');
      listElement.innerHTML = `
        <a href="#" class="project">${project.name}</a>
      `;
      navList.appendChild(listElement);
      listElement.addEventListener('click', () => {
        const tasksContainer = document.querySelector('#tasks');
        const taskList = TasksView.renderTasks(project);
        tasksContainer.innerHTML = '';
        tasksContainer.appendChild(taskList);
      });
    });
    return navList;
  };

  return { renderProjects };
})();

export default ProjectsView;
