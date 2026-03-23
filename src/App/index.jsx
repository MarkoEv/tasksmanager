import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
// const defaultTodos = [
//   { id: 10, text: 'Cortar Cebolla', completed: false },
//   { id: 11, text: 'curos 1', completed: false },
//   { id: 22, text: 'Cortar', completed: true },
//   { id: 33, text: 'curso 3', completed: true },
//   { id: 14, text: 'curso 4', completed: false },
// ];

// localStorage.setItem('TODOS', JSON.stringify(defaultTodos));

export default function App() {
  // estado para el h1 => totales completados
  const [todos, saveTodos] = useLocalStorage('TODOS', []);
  const completedTodos = todos.filter((i) => i.completed).length;
  const totalTodos = todos.length;

  // estado de search
  const [searchValue, setSearchValue] = React.useState('');
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
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      textSearch={textSearch}
      marcarCompletado={marcarCompletado}
      deleteItem={deleteItem}
      todos={todos}
    />
  );
}
