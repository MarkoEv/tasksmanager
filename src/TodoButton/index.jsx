import React from 'react';
import { TodoContext } from '../TodoContext';

// icons import
import { FaTrashAlt, FaSearch, FaHandPointLeft } from 'react-icons/fa';
import { IoReloadOutline } from 'react-icons/io5';
import { TiPlus } from 'react-icons/ti';

function TodoButton() {
  const { setOpenModal, trashHistorial, searchRef } =
    React.useContext(TodoContext);

  const reload = () => {
    window.location.reload();
  };

  function confirmTrash() {
    if (confirm('¿Estás segur@ de eliminar todas las tareas?')) {
      trashHistorial();
    }
  }

  const baseBtn =
    'group cursor-pointer flex items-center justify-between gap-3 w-full px-4 py-3 rounded-2xl  ' +
    'bg-white text-black border border-gray-200 shadow-md hover:scale-[1.03] hover:bg-gray-100 hover:shadow-lg ' +
    'dark:bg-white/5 dark:text-white dark:border-white/10 dark:backdrop-blur-md dark:hover:bg-white/10';

  const iconStyle = 'text-lg opacity-80 group-hover:opacity-100 transition';

  return (
    <div className="col-span-1">
      <div className="fixed bottom-4 left-1/2 z-50 w-[90%] -translate-x-1/2 md:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-lg transition-all duration-300 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md">
          <button
            onClick={() => setOpenModal(true)}
            className="flex flex-col items-center text-green-500 active:scale-90"
          >
            <TiPlus className="text-xl" />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">
              Nueva
            </span>
          </button>

          <button
            className="flex flex-col items-center text-red-500 active:scale-90"
            onClick={confirmTrash}
          >
            <FaTrashAlt className="text-xl" />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">
              Limpiar
            </span>
          </button>

          <button
            className="flex flex-col items-center text-blue-500 active:scale-90"
            onClick={reload}
          >
            <IoReloadOutline className="text-xl" />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">
              Reload
            </span>
          </button>

          <button
            className="flex flex-col items-center text-yellow-500 active:scale-90"
            onClick={() => searchRef.current?.focus()}
          >
            <FaSearch className="text-xl" />
            <span className="text-[10px] text-gray-500 dark:text-gray-400">
              Buscar
            </span>
          </button>
        </div>
      </div>
      <div className="hidden p-5 md:block lg:block">
        <div className="grid gap-4">
          <button
            className={`${baseBtn} border-green-400/30 hover:border-green-500`}
            onClick={() => setOpenModal(true)}
          >
            <div className="flex items-center gap-3">
              <TiPlus className={`${iconStyle} text-green-500`} />
              <span className="font-medium">Nueva Tarea</span>
            </div>
            <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </button>

          <button
            className={`${baseBtn} border-red-400/30 hover:border-red-500`}
            onClick={confirmTrash}
          >
            <div className="flex items-center gap-3">
              <FaTrashAlt className={`${iconStyle} text-red-500`} />
              <span className="font-medium">Limpiar Tareas</span>
            </div>
            <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </button>

          <button
            className={`${baseBtn} border-blue-400/30 hover:border-blue-500`}
            onClick={reload}
          >
            <div className="flex items-center gap-3">
              <IoReloadOutline className={`${iconStyle} text-blue-500`} />
              <span className="font-medium">Recargar Página</span>
            </div>
            <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </button>

          <button
            className={`${baseBtn} border-yellow-400/30 hover:border-yellow-500`}
            onClick={() => searchRef.current?.focus()}
          >
            <div className="flex items-center gap-3">
              <FaSearch className={`${iconStyle} text-yellow-500`} />
              <span className="font-medium">Buscar Tarea</span>
            </div>
            <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoButton;
