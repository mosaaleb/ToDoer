const Project = (projectName, projectColor, projectTasks = []) => {
  const name = projectName;
  const color = projectColor;
  const tasks = projectTasks;

  const addTask = (task) => {
    tasks.push(task);
  };

  const removeTask = (task) => {
    tasks.splice(tasks.indexOf(task), 1);
  };

  return {
    addTask, removeTask, name, color, tasks
  };
};

export default Project;
