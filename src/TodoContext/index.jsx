import React, { useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const TodoContext = React.createContext();

export function TodoProvider({ children }) {
  // useRef
  const searchRef = useRef(null);

  // localStorage => estado inicial : por defecto dark
  const [darkMode, setDarkMode] = React.useState(() => {
    const theme = localStorage.getItem('theme');
    return theme !== null ? theme === 'true' : true;
  });

  const toggleDarkMode = () => {
    setDarkMode((mode) => {
      localStorage.setItem('theme', !mode);
      return !mode;
    });
  };
  // cada vez que darkMode cambpa
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // estado para el h1 => totales completados
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS', []);
  const completedTodos = todos.filter((i) => i.completed).length;
  const totalTodos = todos.length;

  // estado de search
  const [searchValue, setSearchValue] = React.useState('');
  // converir en minusculas
  const textSearch = searchValue.toLocaleLowerCase();

  // estado modAL
  const [openModal, setOpenModal] = React.useState(false);

  // agregar nuevo todo
  const addTodo = (text) => {
    const newTodos = [...todos];
    // identificar
    newTodos.push({
      id: new Date().getTime(),
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  // funcion para completar
  const marcarCompletado = (id) => {
    // copiar
    const newTodos = [...todos];
    // identificar
    const todo = newTodos.findIndex((i) => i.id === id);
    if (newTodos[todo].completed) {
      newTodos[todo].completed = false;
    } else {
      newTodos[todo].completed = true;
    }

    saveTodos(newTodos);
  };

  // limpiar historial
  const trashHistorial = () => {
    const trashTodos = [];
    saveTodos(trashTodos);
  };

  // delete
  const deleteItem = (id) => {
    const newTodo = [...todos];
    const indexTodo = newTodo.findIndex((i) => i.id === id);
    newTodo.splice(indexTodo, 1);
    saveTodos(newTodo);
  };
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todos,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        deleteItem,
        addTodo,
        marcarCompletado,
        textSearch,
        openModal,
        setOpenModal,
        trashHistorial,
        searchRef,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
