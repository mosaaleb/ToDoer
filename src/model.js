import EventDispatcher from './eventDispatcher';

const Model = (() => {
  let activeProject = null;
  const addProjectEvent = EventDispatcher();

  const init = () => {
    if (!localStorage.projects) {
      localStorage.projects = JSON.stringify([]);
    }
  };

  const add = (projects) => {
    localStorage.projects = JSON.stringify(projects);
  };

  const getAll = () => JSON.parse(localStorage.projects);

  const addProject = (project) => {
    const projects = getAll();
    projects.push(project);
    add(projects);
    // NOTIFY VIEW
    addProjectEvent.notify(projects);
  };

  const getActiveProject = () => activeProject;

  const setActiveProject = (project) => {
    activeProject = project;
  };

  return {
    init,
    add,
    getAll,
    activeProject,
    getActiveProject,
    setActiveProject,
    addProject,
    addProjectEvent
  };
})();

Model.init();

export default Model;
