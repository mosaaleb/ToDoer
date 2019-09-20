import Model from './model';
import Project from './project';
// import UI from './views/ui';
import TasksView from './views/tasksView';
import ProjectsView from './views/projectsView';


const Controller = (() => {
  const setActiveProject = (project) => {
    Model.setActiveProject(project);
  };

  const getActiveProject = () => Model.getActiveProject();

  const getProjects = () => Model.getAll();

  const getActiveProjectTasks = () => getActiveProject().tasks;

  // HANDLERS
  const projectSelectHandler = (projectIndex) => {
    const clickedProject = getProjects()[projectIndex];
    setActiveProject(clickedProject);
    TasksView.render(getActiveProjectTasks());
  };

  const AddProjectHandler = (projectName, projectColor) => {
    const project = Project(projectName, projectColor);
    Model.addProject(project);
    ProjectsView.render(getProjects());
  };

  const init = () => {
    setActiveProject(getProjects()[0]);

    ProjectsView.init(getProjects());
    TasksView.init(getActiveProjectTasks());

    // BIND
    ProjectsView.bindProjectSelect(projectSelectHandler);
    ProjectsView.bindAddProject(AddProjectHandler);
  };


  return {
    init,
    setActiveProject,
    getActiveProject,
    getActiveProjectTasks,
    getProjects
  };
})();

// Controller.init();

export default Controller;
