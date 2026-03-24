import { FaExclamationTriangle } from 'react-icons/fa';

function TodosError() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-red-400/20 bg-red-500/10 p-8 text-center shadow-md backdrop-blur-md">
      <div className="text-5xl text-red-400">
        <FaExclamationTriangle />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">Ocurrió un error</h3>
        <p className="text-sm text-red-300">
          No se pudieron cargar las tareas. Intenta nuevamente.
        </p>
      </div>
      <button
        className="mt-2 rounded-xl bg-red-500/80 px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-red-500"
        onClick={() => window.location.reload()}
      >
        Reintentar
      </button>
    </div>
  );
}

export { TodosError };
