import React from 'react';
import { TodoContext } from '../TodoContext';

const TodoCount = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="flex justify-items-end p-5 text-6xl font-bold">
      Has completado {completedTodos} de {totalTodos}
    </h2>
  );
};

export default TodoCount;
