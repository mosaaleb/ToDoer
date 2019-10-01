const EventDispatcher = () => {
  const observers = [];

  const addObserver = (observer) => {
    observers.push(observer);
  };

  const notify = (data) => {
    observers.forEach((observer) => {
      observer.update(data);
    });
  };

  return { addObserver, notify };
};

export default EventDispatcher;
