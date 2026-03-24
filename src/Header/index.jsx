import p1 from '../../public/logo/parte1.png';
import p2 from '../../public/logo/parte2.png';
import p3 from '../../public/logo/parte3.png';
import p4 from '../../public/logo/parte4.png';
import p5 from '../../public/logo/parte5.png';
import ReactDOM from 'react-dom';
import { FaGithub, FaSun } from 'react-icons/fa';

function Header() {
  const parts = [p1, p2, p3, p4, p5];

  return ReactDOM.createPortal(
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-md backdrop-blur-md">
      <a href="/" className="group flex items-center gap-1">
        {parts.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-8 transition-all duration-300 group-hover:-translate-y-1 hover:scale-110 hover:rotate-3"
            style={{
              transitionDelay: `${i * 50}ms`,
            }}
          />
        ))}
      </a>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-md">
          <FaSun />
          Tema
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-md">
          <FaGithub />
          Código
        </button>
      </div>
    </div>,
    document.querySelector('header')
  );
}

export default Header;
