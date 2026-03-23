import React from 'react';
import TodoButton from './TodoButton';
import TodoCount from './TodoCount';
import TodoItem from './TodoItems';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';

// const defaultTodos = [
//   { id: 10, text: 'Cortar Cebolla', completed: false },
//   { id: 11, text: 'curos 1', completed: false },
//   { id: 22, text: 'Cortar', completed: true },
//   { id: 33, text: 'curso 3', completed: true },
//   { id: 14, text: 'curso 4', completed: false },
// ];

// localStorage.setItem('TODOS', JSON.stringify(defaultTodos));

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItem = [];
  } else {
    parseItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parseItem);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
};

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
    <>
      <TodoCount completed={completedTodos} total={totalTodos} />
      <TodoButton />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {todos
          .filter((i) => {
            return i.text.toLocaleLowerCase().includes(textSearch);
          })
          .map((item) => (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
              onComplete={() => marcarCompletado(item.id)}
              onDelete={() => deleteItem(item.id)}
            />
          ))}
      </TodoList>
    </>
  );
}
