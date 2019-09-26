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

  const addProjectHandler = (projectName, projectColor) => {
    const project = Project(projectName, projectColor);
    Model.addProject(project);
  };

  const addTaskHandler = (taskTitle, taskDesc, taskDue) => {
    const task = {
      title: taskTitle,
      description: taskDesc,
      dueDate: taskDue
    };
    const activeProject = getActiveProject();
    const updatedProject = Project(activeProject.name, activeProject.color, activeProject.tasks);
    const allProjects = Model.getAll();

    updatedProject.tasks.push(task);
    const index = allProjects.findIndex((project) => project.name === updatedProject.name);
    allProjects.splice(index, 1, updatedProject);
    Model.add(allProjects);
    // TasksView.render(getActiveProjectTasks());
  };

  const init = () => {
    setActiveProject(getProjects()[0]);

    ProjectsView.init(getProjects());
    TasksView.init(getActiveProjectTasks());

    // BIND
    ProjectsView.bindProjectSelect(projectSelectHandler);
    ProjectsView.bindAddProject(addProjectHandler);
    TasksView.bindAddTask(addTaskHandler);

    // ATTACH EVENTS
    Model.addProjectEvent.addObserver(ProjectsView.render);
    Model.addTaskEvent.addObserver(TasksView.render);
  };


  return {
    init,
    setActiveProject,
    getActiveProject,
    getActiveProjectTasks,
    getProjects
  };
})();


export default Controller;
