import React from 'react';

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = [];
        } else {
          parseItem = JSON.parse(localStorageItem);
          setItem(parseItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
};

export { useLocalStorage };

// const defaultTodos = [
//   { id: 10, text: 'Cortar Cebolla', completed: false },
//   { id: 11, text: 'curos 1', completed: false },
//   { id: 22, text: 'Cortar', completed: true },
//   { id: 33, text: 'curso 3', completed: true },
//   { id: 14, text: 'curso 4', completed: false },
// ];

// localStorage.setItem('TODOS', JSON.stringify(defaultTodos));
