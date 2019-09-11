const TasksView = (() => {
  const renderTasks = (project) => {
    const list = document.createElement('ul');
    project.tasks.forEach((task) => {
      list.innerHTML += `
        <li>${task.title}</li>
      `;
    });
    return list;
  };

  return { renderTasks };
})();

export default TasksView;
