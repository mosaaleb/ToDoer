// TODO: Use task factory in creating tasks

import Model from './model';
import Project from './project';
// import Task from './task';
// import ProjectsView from './views/projectsView';
// import TasksView from './views/tasksView';

const Controller = (() => {
  const setActiveProject = (project) => {
    Model.setActiveProject(project);
  };

  const getActiveProject = () => Model.getActiveProject();

  const getProjects = () => Model.getAll();

  const getActiveProjectTasks = () => getActiveProject().tasks;

  const addProject = (projectName, projectColor) => {
    const project = Project(projectName, projectColor);
    Model.addProject(project);

    setActiveProject(project);
    Model.projectSelectEvent.notify(getActiveProjectTasks());
  };

  const addTask = (taskTitle, taskDesc, taskDue) => {
    const task = {
      title: taskTitle,
      description: taskDesc,
      dueDate: taskDue,
      priority: 2,
      done: false
    };
    // const task = Task(taskTitle, taskDesc, taskDue);
    const activeProject = getActiveProject();
    const allProjects = Model.getAll();

    activeProject.tasks.push(task);
    const index = allProjects.findIndex((project) => project.name === activeProject.name);
    allProjects.splice(index, 1, activeProject);
    Model.add(allProjects);
  };

  const init = () => {
    setActiveProject(getProjects()[0]);
  };

  const removeProject = (index) => {
    const projects = Model.getAll();
    projects.splice(index, 1);
    Model.add(projects);
  };

  const removeTask = (index) => {
    const projects = Model.getAll();
    const activeProject = getActiveProject();
    const activeProjectIndex = projects.findIndex((project) => project.name === activeProject.name);
    activeProject.tasks.splice(index, 1);
    projects.splice(activeProjectIndex, 1, activeProject);
    Model.add(projects);
  };

  const editTask = (index, task) => {
    const projects = Model.getAll();
    const activeProject = getActiveProject();
    const activeProjectIndex = projects.findIndex((project) => project.name === activeProject.name);
    activeProject.tasks.splice(index, 1, task);
    projects.splice(activeProjectIndex, 1, activeProject);
    Model.add(projects);
  };

  const toggleDone = (index) => {
    const projects = Model.getAll();
    const activeProject = getActiveProject();
    const activeProjectIndex = projects.findIndex((project) => project.name === activeProject.name);
    const task = projects[activeProjectIndex].tasks[index];
    task.done = !task.done;
    Model.add(projects);
  };

  return {
    init,
    setActiveProject,
    getActiveProject,
    getActiveProjectTasks,
    getProjects,
    addProject,
    addTask,
    removeProject,
    removeTask,
    editTask,
    toggleDone
  };
})();


export default Controller;
