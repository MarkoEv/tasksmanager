function TodoList(props) {
  return (
    <div className="col-span-3">
      <ul className="grid gap-5 p-5">
        {props.children}
        {!!props.searchValue &&
          !props.totalTodos.length &&
          props.onEmptySearchResults()}
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && props.todos.length === 0 && props.onEmptyTodos()}
        {props.render()}
      </ul>
    </div>
  );
}

export default TodoList;
