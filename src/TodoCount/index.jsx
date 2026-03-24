import { FaCheckCircle } from 'react-icons/fa';
import React from 'react';
import { TodoContext } from '../TodoContext';

const TodoCount = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-black shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-white dark:backdrop-blur-md dark:hover:bg-white/10">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Progreso de tareas
          </span>
          <h2 className="text-lg font-semibold text-black md:text-xl dark:text-white">
            {completedTodos} de {totalTodos} completadas
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-2xl text-green-500" />
          <span className="text-lg font-bold text-green-500">
            {Math.round((completedTodos / totalTodos) * 100) || 0}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoCount;
