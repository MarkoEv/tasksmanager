import TodoButton from '../TodoButton';
import TodoCount from '../TodoCount';
import TodoItem from '../TodoItems';
import TodoList from '../TodoList';
import TodoSearch from '../TodoSearch';

function AppUI({
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
}) {
  return (
    <>
      <TodoCount completed={completedTodos} total={totalTodos} />
      <TodoButton />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && (
          <div className="w-100">
            Cargando...
            <span className="h-10 w-10 animate-spin rounded-b-full"></span>
          </div>
        )}

        {error && <span>Error</span>}
        {/* 
        {!loading && searchValue.length === 0 && (
          <span>Crea Tu primer todo</span>
        )} */}

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

export { AppUI };
