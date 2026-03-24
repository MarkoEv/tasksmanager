import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-gray-900/80">
      <div className="h-60 w-120 rounded-2xl bg-gray-800">{children}</div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
