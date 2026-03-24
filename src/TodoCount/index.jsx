import { FaCheckCircle } from 'react-icons/fa';
import React from 'react';
import { TodoContext } from '../TodoContext';

const TodoCount = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg">
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Progreso de tareas</span>
          <h2 className="text-lg font-semibold text-white md:text-xl">
            {completedTodos} de {totalTodos} completadas
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-2xl text-green-400" />
          <span className="text-lg font-bold text-green-400">
            {/* porcentaje de progreso de tareas  */}
            {Math.round((completedTodos / totalTodos) * 100) || 0}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoCount;
