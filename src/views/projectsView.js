import Controller from '../controller';
import Model from '../model';
import projectsTemplate from '../index.hbs';

const ProjectsView = (() => {
  const navBar = document.getElementById('projects');
  const navList = document.createElement('ul');
  const form = document.createElement('form');

  const update = (projects) => {
    navBar.innerHTML = projectsTemplate(projects);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectNameInput = document.querySelector('.project-name-input');
    const projectColorInput = document.querySelector('.project-color-input');

    const projectName = projectNameInput.value;
    const projectColor = projectColorInput.value;
    projectNameInput.value = '';
    projectColorInput.value = '#ffffff';
    Controller.addProject(projectName, projectColor);
    Model.addProjectEvent.notify(Controller.getProjects());

    // const projects = Controller.getProjects();
    // Controller.setActiveProject(projects[projects.length - 1]);
    // Model.projectSelectEvent.notify(Controller.getActiveProjectTasks());
  });

  // const update = (projects) => {
  //   navList.innerHTML = '';
  //   projects.forEach((project, index) => {
  //     const projectItem = document.createElement('div');
  //     const projectName = document.createElement('div');
  //     const deleteButton = document.createElement('button');
  //     deleteButton.id = index;
  //     deleteButton.textContent = 'X';
  //     projectName.textContent = project.name;
  //     projectItem.appendChild(projectName);
  //     projectItem.appendChild(deleteButton);
  //     projectName.addEventListener('click', () => {
  //       if (project.name !== Controller.getActiveProject().name) {
  //         Controller.setActiveProject(project);
  //         Model.projectSelectEvent.notify(Controller.getActiveProjectTasks());
  //       }
  //     });
  //     deleteButton.addEventListener('click', (event) => {
  //       Controller.removeProject(event.target.id);
  //       Model.removeProjectEvent.notify(Controller.getProjects());
  //     });
  //     navList.appendChild(projectItem);
  //   });
  // };

  const renderForm = () => {
    const input = document.createElement('input');
    const colorInput = document.createElement('input');
    const submitButton = document.createElement('button');
    input.type = 'text';
    colorInput.type = 'color';
    input.className = 'project-name-input';
    colorInput.className = 'project-color-input';
    submitButton.textContent = 'Add Project';
    form.append(input, colorInput, submitButton);
    navBar.appendChild(form);
  };

  const init = (projects) => {
    navBar.appendChild(navList);
    update(projects);
    renderForm();
  };

  return {
    init, update
  };
})();

export default ProjectsView;
