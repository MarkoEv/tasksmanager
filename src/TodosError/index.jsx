import { FaExclamationTriangle } from 'react-icons/fa';

function TodosError() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-black shadow-md transition-all duration-300 dark:border-red-400/20 dark:bg-red-500/10 dark:text-white dark:backdrop-blur-md">
      <div className="text-5xl text-red-500">
        <FaExclamationTriangle />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-black dark:text-white">
          Ocurrió un error
        </h3>
        <p className="text-sm text-red-500 dark:text-red-300">
          No se pudieron cargar las tareas. Intenta nuevamente.
        </p>
      </div>

      <button
        className="mt-2 rounded-xl bg-red-500 px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-red-600"
        onClick={() => window.location.reload()}
      >
        Reintentar
      </button>
    </div>
  );
}

export { TodosError };
