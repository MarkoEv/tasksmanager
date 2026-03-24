import React from 'react';
import TodoButton from '../TodoButton';
import TodoCount from '../TodoCount';
import TodoItem from '../TodoItems';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch';
import { TodosLoading } from '../TodosLoading/';
import { TodosError } from '../TodosError/';
import { EmptyTodos } from '../EmptyTodos/';
import { ItemForm } from '../ItemForm/';
import Modal from '../modal';
import { TodoContext } from '../TodoContext/';

function AppUI() {
  const {
    loading,
    error,
    todos,
    deleteItem,
    marcarCompletado,
    textSearch,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCount />
      <TodoButton />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && todos.length === 0 && <EmptyTodos />}

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
      {openModal && (
        <Modal>
          <ItemForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
