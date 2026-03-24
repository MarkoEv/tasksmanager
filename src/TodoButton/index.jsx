import React from 'react';
import { TodoContext } from '../TodoContext';

// icons import
import { FaTrashAlt, FaSearch, FaHandPointLeft } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { IoReloadOutline } from 'react-icons/io5';
import { TiPlus } from 'react-icons/ti';

function TodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  const baseBtn =
    'group cursor-pointer flex items-center justify-between gap-3 w-full px-4 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 hover:shadow-lg';

  const iconStyle = 'text-lg opacity-80 group-hover:opacity-100 transition';

  return (
    <div className="col-span-1 p-5">
      <div className="grid gap-4">
        <button
          className={`${baseBtn} border-green-400/20 hover:border-green-400/50`}
          onClick={() => setOpenModal(true)}
        >
          <div className="flex items-center gap-3">
            <TiPlus className={`${iconStyle} text-green-400`} />
            <span className="font-medium">Nueva Tarea</span>
          </div>
          <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </button>

        <button
          className={`${baseBtn} border-red-400/20 hover:border-red-400/50`}
        >
          <div className="flex items-center gap-3">
            <FaTrashAlt className={`${iconStyle} text-red-400`} />
            <span className="font-medium">Limpiar Tareas</span>
          </div>
          <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </button>

        <button
          className={`${baseBtn} border-blue-400/20 hover:border-blue-400/50`}
        >
          <div className="flex items-center gap-3">
            <IoReloadOutline className={`${iconStyle} text-blue-400`} />
            <span className="font-medium">Recargar Página</span>
          </div>
          <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </button>

        <button
          className={`${baseBtn} border-yellow-400/20 hover:border-yellow-400/50`}
        >
          <div className="flex items-center gap-3">
            <FaSearch className={`${iconStyle} text-yellow-400`} />
            <span className="font-medium">Buscar Tarea</span>
          </div>
          <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </button>

        <button
          className={`${baseBtn} border-gray-400/20 hover:border-gray-400/50`}
        >
          <div className="flex items-center gap-3">
            <FaGithub className={`${iconStyle}`} />
            <span className="font-medium">Github</span>
          </div>
          <FaHandPointLeft className="translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
}

export default TodoButton;
