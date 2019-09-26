const EventDispatcher = () => {
  const observers = [];

  const addObserver = (observer) => {
    observers.push(observer);
  };

  const notify = (args) => {
    observers.forEach((observer) => {
      observer(args);
    });
  };

  return { addObserver, notify };
};

export default EventDispatcher;
