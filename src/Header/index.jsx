import icono from '../../public/icon/icon.png';
import ReactDOM from 'react-dom';
import { FaGithub, FaSun } from 'react-icons/fa';

function Header() {
  function githubLink() {
    const URL = 'https://github.com/MarkoEv';
    window.open(URL, '_blank', 'noopener,noreferrer');
  }

  return ReactDOM.createPortal(
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-md backdrop-blur-md">
      <a href="/" className="group flex items-center gap-1 font-bold">
        <img src={icono} className="h-5 w-auto translate-y-0.5" />
        <h3 className="text-2xl leading-none md:text-3xl lg:text-3xl">TASKS</h3>
      </a>
      <div className="flex items-center gap-3">
        <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-md">
          <FaSun />
          Tema
        </button>

        <button
          className="flex cursor-pointer items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-md"
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
