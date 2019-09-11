const Model = (() => {
  const init = () => {
    if (!localStorage.projects) {
      localStorage.projects = JSON.stringify([]);
    }
  };

  const add = (projects) => {
    localStorage.projects = JSON.stringify(projects);
  };

  const getAll = () => JSON.parse(localStorage.projects);

  return {
    init, add, getAll
  };
})();

export default Model;
