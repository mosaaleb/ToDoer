import Task from './task';
import Project from './project';
import Model from './model';

const project = Project('Default', 'blue');
project.addTask(Task('title', 'description', Date.now(), 1));
project.addTask(Task('title2', 'description2', Date.now(), 2));
project.addTask(Task('title3', 'description3', Date.now(), 3));

const project1 = Project('Week', 'blue');
project.addTask(Task('week', 'description', Date.now(), 1));
project.addTask(Task('week', 'description2', Date.now(), 2));

Model.init();
Model.add(project);
Model.add(project1);
