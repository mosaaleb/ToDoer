import Task from './task';
import Project from './project';
import Model from './model';

const allProjects = [];

const project = Project('Default', 'blue');
allProjects.push(project);
project.addTask(Task('title', 'description', Date.now(), 1));
project.addTask(Task('title2', 'description2', Date.now(), 2));
project.addTask(Task('title3', 'description3', Date.now(), 3));

const project1 = Project('Week', 'blue');
allProjects.push(project1);
project1.addTask(Task('week', 'description', Date.now(), 1));
project1.addTask(Task('week', 'description2', Date.now(), 2));


Model.init();
Model.add(allProjects);

const project3 = Project('Another one', 'red');
allProjects.push(project3);
Model.add(allProjects);
