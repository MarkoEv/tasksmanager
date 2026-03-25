import { FaClipboardList } from 'react-icons/fa';

function EmptyTodos() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white p-8 text-center text-black shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white dark:backdrop-blur-md">
      <div className="text-5xl text-gray-400 opacity-80 dark:text-gray-500">
        <FaClipboardList />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-black dark:text-white">
          No hay tareas
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Agrega una nueva tarea para comenzar
        </p>
      </div>
    </div>
  );
}

export { EmptyTodos };
