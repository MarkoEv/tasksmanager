import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export const TodoContext = React.createContext();

export function TodoProvider({ children }) {
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
  // estado modAL
  const [openModal, setOpenModal] = React.useState(false);
  // converir en minusculas
  const textSearch = searchValue.toLocaleLowerCase();
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
        marcarCompletado,
        textSearch,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
