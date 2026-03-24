import React from 'react';
import icono from '../../public/icon/icon.png';
import ReactDOM from 'react-dom';
import { FaGithub, FaMoon, FaSun } from 'react-icons/fa';
import { TodoContext } from '../TodoContext';

function Header() {
  const { darkMode, toggleDarkMode } = React.useContext(TodoContext);

  function githubLink() {
    const URL = 'https://github.com/MarkoEv';
    window.open(URL, '_blank', 'noopener,noreferrer');
  }

  return ReactDOM.createPortal(
    <div className="flex items-center justify-between rounded-2xl bg-gray-100 px-6 py-4 text-black dark:bg-white/5 dark:text-white dark:backdrop-blur-md">
      <a href="/" className="group flex items-center gap-1 font-bold">
        <img src={icono} className="h-5 w-auto translate-y-0.5" />
        <h3 className="text-2xl leading-none text-green-600 md:text-3xl lg:text-3xl dark:text-white">
          TASKS
        </h3>
      </a>

      <div className="flex items-center gap-3">
        <button
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-md dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaMoon /> : <FaSun />}
          Tema
        </button>

        <button
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-md dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          onClick={() => githubLink()}
        >
          <FaGithub />
          Código
        </button>
      </div>
    </div>,
    document.querySelector('header')
  );
}

export default Header;
