const Model = (() => {
  const init = () => {
    if (!localStorage.projects) {
      localStorage.projects = JSON.stringify([]);
    }
  };

  const add = (obj) => {
    const data = JSON.parse(localStorage.projects);
    data.push(obj);
    localStorage.projects = JSON.stringify(data);
  };

  const getAll = () => JSON.parse(localStorage.projects);

  return {
    init, add, getAll
  };
})();

export default Model;
