import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="w-[90%] max-w-md animate-[fadeIn_.3s_ease] rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
