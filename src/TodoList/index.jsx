function TodoList(props) {
  return (
    <div className="col-span-3">
      <ul className="grid gap-5 p-5">{props.children}</ul>
    </div>
  );
}

export default TodoList;
