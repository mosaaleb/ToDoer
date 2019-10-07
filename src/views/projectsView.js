import Controller from '../controller';
import Model from '../model';
import projectsTemplate from '../index.hbs';

const ProjectsView = (() => {
  const navBar = document.getElementById('projects');

  const renderForm = () => {
    const form = document.getElementById('project-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const projectNameInput = document.querySelector('#project-name-input');
      const projectColorInput = document.querySelector('#project-color-input');

      const projectName = projectNameInput.value;
      const projectColor = projectColorInput.value;
      projectNameInput.value = '';
      projectColorInput.value = '#ffffff';
      Controller.addProject(projectName, projectColor);
      Model.addProjectEvent.notify(Controller.getProjects());
    });
  };

  const update = (projects) => {
    navBar.innerHTML = projectsTemplate(projects);
    const deleteButton = document.getElementsByClassName('delete-project-button');
    const projectItems = document.getElementsByClassName('project-name');
    [...deleteButton].forEach((button) => {
      button.addEventListener('click', (event) => {
        Controller.removeProject(event.target.parentElement.id);
        Model.removeProjectEvent.notify(Controller.getProjects());
      });
    });
    [...projectItems].forEach((project) => {
      project.addEventListener('click', (event) => {
        const allProjects = Controller.getProjects();
        Controller.setActiveProject(allProjects[event.target.parentElement.id]);
        Model.projectSelectEvent.notify(Controller.getActiveProjectTasks());
      });
    });
    renderForm();
  };

  const init = (projects) => {
    update(projects);
  };

  return {
    init, update
  };
})();

export default ProjectsView;
