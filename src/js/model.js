import EventDispatcher from './eventDispatcher';

const Model = (() => {
  let activeProject = null;

  const addTaskEvent = EventDispatcher();
  const addProjectEvent = EventDispatcher();
  const removeTaskEvent = EventDispatcher();
  const projectSelectEvent = EventDispatcher();
  const removeProjectEvent = EventDispatcher();

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

  const addProject = (project) => {
    const projects = getAll();
    projects.push(project);
    add(projects);
  };

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
    addProjectEvent,
    addTaskEvent,
    projectSelectEvent,
    removeProjectEvent,
    removeTaskEvent
  };
})();

export default Model;
