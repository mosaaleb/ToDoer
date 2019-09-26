import EventDispatcher from './eventDispatcher';

const Model = (() => {
  let activeProject = null;
  const addProjectEvent = EventDispatcher();
  const addTaskEvent = EventDispatcher();

  const init = () => {
    if (!localStorage.projects) {
      localStorage.projects = JSON.stringify([]);
    }
  };

  const add = (projects) => {
    localStorage.projects = JSON.stringify(projects);
    addTaskEvent.notify(activeProject.tasks);
  };

  const getAll = () => JSON.parse(localStorage.projects);

  const addProject = (project) => {
    const projects = getAll();
    projects.push(project);
    add(projects);
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
    addProjectEvent,
    addTaskEvent
  };
})();

// Model.init();

export default Model;
