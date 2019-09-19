const Model = (() => {
  let activeProject = null;

  const init = () => {
    if (!localStorage.projects) {
      localStorage.projects = JSON.stringify([]);
    }
  };

  const add = (projects) => {
    localStorage.projects = JSON.stringify(projects);
  };

  const getAll = () => JSON.parse(localStorage.projects);

  const getActiveProject = () => activeProject;

  const setActiveProject = (project) => {
    activeProject = project;
  };

  return {
    init, add, getAll, activeProject, getActiveProject, setActiveProject
  };
})();

Model.init();

export default Model;
