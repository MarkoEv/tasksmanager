const TodoCount = (props) => {
  return (
    <h2 className="flex justify-items-end p-5 text-6xl font-bold">
      Has completado {props.completed} de {props.total}
    </h2>
  );
};

export default TodoCount;
