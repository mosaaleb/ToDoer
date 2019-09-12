import Model from './model';


const Controller = (() => {
  const setActiveProject = (project) => {
    Model.setActiveProject(project);
  };

  const init = () => {
    setActiveProject({
      name: 'Default', color: 'black', tasks: []
    });
  };

  const getActiveProject = () => Model.getActiveProject();

  const getProjects = () => Model.getAll();

  const getActiveProjectTasks = () => getActiveProject().tasks;
  // const projects = getProjects();
  // const activeProject = projects.find((project) => project.name === getActiveProject().name);

  return {
    init, setActiveProject, getActiveProject, getActiveProjectTasks, getProjects
  };
})();

export default Controller;
