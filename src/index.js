import './assets/main.css';
import Model from './model';
import Controller from './controller';
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
