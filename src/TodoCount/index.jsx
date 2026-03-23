const TodoCount = ({ completed, total }) => {
  return (
    <h2 className="flex justify-items-end p-5 text-6xl font-bold">
      Has completado {completed} de {total}
    </h2>
  );
};

export default TodoCount;
