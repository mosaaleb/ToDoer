import Task from './task';
import Project from './project';
import Model from './model';
import UserInterface from './views/ui';

const projects = [];

const project = Project('Default', 'blue');
projects.push(project);
project.addTask(Task('title', 'description', Date.now(), 1));
project.addTask(Task('title2', 'description2', Date.now(), 2));
project.addTask(Task('title3', 'description3', Date.now(), 3));

const project1 = Project('Week', 'blue');
projects.push(project1);
project1.addTask(Task('week', 'description', Date.now(), 1));
project1.addTask(Task('week', 'description2', Date.now(), 2));


Model.init();
Model.add(projects);

const project3 = Project('Another one', 'red');
projects.push(project3);
Model.add(projects);

UserInterface.init(projects);
