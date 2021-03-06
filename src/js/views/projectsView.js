import Controller from '../controller';
import Model from '../model';
import projectsTemplate from '../../templates/projects.hbs';

const ProjectsView = (() => {
  const navBar = document.getElementById('projects');

  const renderForm = () => {
    let choosenColor = '#e53e3e';
    let isOpen = false;
    const dropDown = document.getElementById('color-drop-down');
    const colorsContainer = document.getElementById('colors-container');
    const colorOptions = document.querySelectorAll('.color-option');
    dropDown.addEventListener('click', () => {
      isOpen = !isOpen;
      colorsContainer.style.visibility = isOpen ? 'visible' : 'hidden';
    });

    colorOptions.forEach((color) => {
      color.addEventListener('click', () => {
        choosenColor = color.dataset.value;
        dropDown.children[0].style.backgroundColor = choosenColor;
        colorsContainer.style.visibility = 'hidden';
        isOpen = !isOpen;
      });
    });

    const form = document.getElementById('project-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const projectNameInput = document.querySelector('#project-name-input');
      const projectName = projectNameInput.value;
      const projectColor = choosenColor;
      form.reset();
      Controller.addProject(projectName, projectColor);
      Model.addProjectEvent.notify(Controller.getProjects());
    });
  };

  const update = (projects) => {
    navBar.innerHTML = projectsTemplate({ projects });
    const activeProjectIndex = Controller.getActiveProjectIndex();
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.item(activeProjectIndex).classList.add('active-project');
    const deleteButtons = document.querySelectorAll('.delete-project-button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        const index = Number(event.target.closest('li').id);
        if (projects[index].name === Controller.getActiveProject().name) {
          Controller.setActiveProject(Controller.getProjects()[0]);
          Model.projectSelectEvent.notify(Controller.getActiveProjectTasks());
        }
        Controller.removeProject(index);
        Model.removeProjectEvent.notify(Controller.getProjects());
        projectItems.item(activeProjectIndex).classList.add('active-project');
      });
    });
    projectItems.forEach((project) => {
      project.addEventListener('click', () => {
        const activeProject = document.querySelector('.active-project');
        activeProject.classList.remove('active-project');
        project.classList.add('active-project');
        const allProjects = Controller.getProjects();
        Controller.setActiveProject(allProjects[project.id]);
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
