import { FaClipboardList } from 'react-icons/fa';

function EmptyTodos() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-md backdrop-blur-md transition-all duration-300">
      <div className="text-5xl text-gray-400 opacity-80">
        <FaClipboardList />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">No hay tareas</h3>
        <p className="text-sm text-gray-400">
          Agrega una nueva tarea para comenzar
        </p>
      </div>
    </div>
  );
}

export { EmptyTodos };
