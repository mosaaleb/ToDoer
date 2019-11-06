// TODO: Refactor time functionality and add setinterval for current hours

import '../images/logo.png';
import '../images/add-icon.svg';
import '../images/delete-icon.svg';
import '../images/edit-icon.svg';
import '../css/main.css';
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
Model.projectSelectEvent.addObserver(TasksView);
Model.addProjectEvent.addObserver(ProjectsView);
Model.removeProjectEvent.addObserver(ProjectsView);
Model.addTaskEvent.addObserver(TasksView);
Model.removeTaskEvent.addObserver(TasksView);

// Time functionaliity
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September ', 'October', 'November', 'December'];
const formatTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
};

const date = new Date();
const month = months[date.getMonth()];
const weekDay = days[date.getDay()];
const monthDay = date.getDate();
const hour = formatTime(date);

document.getElementById('date').textContent = `${monthDay} ${month}`;
document.getElementById('day-time').textContent = `${weekDay} ${hour}`;
