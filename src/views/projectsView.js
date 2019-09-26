// import TasksView from './tasksView';
// import Controller from '../controller';


const ProjectsView = (() => {
  // const projects = Controller.getProjects();
  const navBar = document.getElementById('projects');
  const navList = document.createElement('ul');
  const form = document.createElement('form');
  let handleProjectSelect = null;
  let handleAddProject = null;

  navList.addEventListener('click', (event) => {
    const projectIndex = event.target.id;
    handleProjectSelect(projectIndex);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectName = document.querySelector('.project-name-input').value;
    const projectColor = document.querySelector('.project-color-input').value;
    handleAddProject(projectName, projectColor);
  });

  const render = (projects) => {
    navList.innerHTML = '';
    projects.forEach((project, index) => {
      const projectItem = document.createElement('li');
      projectItem.textContent = project.name;
      projectItem.id = index;
      navList.appendChild(projectItem);
    });
  };

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

  // BIND
  const bindProjectSelect = (handler) => {
    handleProjectSelect = handler;
  };

  const bindAddProject = (handler) => {
    handleAddProject = handler;
  };

  const init = (projects) => {
    navBar.appendChild(navList);
    render(projects);
    renderForm();
  };

  return {
    init, render, bindProjectSelect, bindAddProject
  };
})();

// ProjectsView.init();

export default ProjectsView;
