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
import { TodoInfo } from '../TodoInfo/';
import Header from '../Header/';
import { useTodos } from './useTodos';
export default function App() {
  const {
    loading,
    error,
    todos,
    deleteItem,
    marcarCompletado,
    textSearch,
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchRef,
    setOpenModal,
    addTodo,
    darkMode,
    toggleDarkMode,
    trashHistorial,
  } = useTodos();
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <TodoButton
        setOpenModal={setOpenModal}
        trashHistorial={trashHistorial}
        searchRef={searchRef}
      />
      {/* render props */}
      <TodoList
        error={error}
        loading={loading}
        todos={todos}
        textSearch={textSearch}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={() => {
          return todos
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
            ));
        }}
      >
        <TodoInfo />
        <TodoCount totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchRef={searchRef}
        />
      </TodoList>

      {openModal && (
        <Modal>
          <ItemForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </>
  );
}
