import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="w-[90%] max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-black shadow-xl transition-all duration-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:backdrop-blur-md">
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
