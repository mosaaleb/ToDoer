import Model from './model';

const Controller = (() => {
  const setActiveProject = (project) => {
    Model.setActiveProject(project);
  };

  const getActiveProject = () => Model.getActiveProject();

  const getProjects = () => Model.getAll();

  const init = () => {
    setActiveProject(getProjects()[0]);
  };

  const getActiveProjectTasks = () => getActiveProject().tasks;

  return {
    init,
    setActiveProject,
    getActiveProject,
    getActiveProjectTasks,
    getProjects
  };
})();

Controller.init();

export default Controller;
