import Model from './model';
import Controller from './controller';
// import Task from './task';
// import Project from './project';
import TasksView from './views/tasksView';
import ProjectsView from './views/projectsView';


Model.init();

Controller.init();
if (Controller.getProjects().length === 0) {
  Controller.addProject('Default', '#ffffff');
}
ProjectsView.init(Controller.getProjects());
TasksView.init(Controller.getActiveProjectTasks());
// Adding observers
// TODO: Replace all event attaching observers into separate module
Model.projectSelectEvent.addObserver(TasksView);
Model.addProjectEvent.addObserver(ProjectsView);
Model.removeProjectEvent.addObserver(ProjectsView);
Model.addTaskEvent.addObserver(TasksView);
Model.removeTaskEvent.addObserver(TasksView);

// Model.onLoadEvent.addObserver(ProjectsView);
// Model.onLoadEvent.addObserver(TasksView);

// const projects = [];

// const project = Project('Default', 'blue');
// projects.push(project);
// project.addTask(Task('d_title', 'description', Date.now(), 1));
// project.addTask(Task('d_title2', 'description2', Date.now(), 2));
// project.addTask(Task('d_title3', 'description3', Date.now(), 3));

// const project1 = Project('Week', 'blue');
// projects.push(project1);
// project1.addTask(Task('week', 'description', Date.now(), 1));
// project1.addTask(Task('week', 'description2', Date.now(), 2));

// Model.add(projects);
// ProjectsView.init();
// TasksView.init();

// const project3 = Project('Another one', 'red');
// projects.push(project3);
// Model.add(projects);

// UserInterface.init(projects);
