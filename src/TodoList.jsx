function TodoList(props) {
  return <ul className="grid grid-cols-3 gap-5 p-5">{props.children}</ul>;
}

export default TodoList;
