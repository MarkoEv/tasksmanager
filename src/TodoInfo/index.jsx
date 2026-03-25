import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

function TodoInfo() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const info = localStorage.getItem('info');

    if (info !== 'false') {
      setVisible(true);
    }
  }, []);

  const closeInfo = () => {
    localStorage.setItem('info', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-blue-200 bg-linear-to-r from-blue-50 to-indigo-50 px-4 py-3 text-sm text-black shadow-md transition-all duration-300 dark:border-blue-400/20 dark:from-blue-500/10 dark:to-indigo-500/10 dark:text-white dark:backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/20">
          <MdOutlineTipsAndUpdates className="text-lg text-blue-500" />
        </div>

        <span className="text-sm md:text-base">
          Marca tus tareas haciendo clic en el icono
        </span>

        <FaCheckCircle className="text-lg text-green-500" />
      </div>

      <button
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-black/10 dark:hover:bg-white/10"
        onClick={closeInfo}
      >
        <IoClose className="text-lg text-gray-500 dark:text-gray-400" />
      </button>
    </div>
  );
}

export { TodoInfo };
