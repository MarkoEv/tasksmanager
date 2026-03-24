import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext';

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex h-screen w-full items-center justify-center bg-gray-900/80">
      <div className="h-50 w-100 rounded-2xl bg-gray-800">
        <div className="grid w-full gap-5 p-5">
          <div className="grid justify-center gap-2">
            <label className="text-xl" htmlFor="item">
              {children}
            </label>
            <input
              type="text"
              name="item"
              className="h-13 w-full rounded-2xl bg-white/10 p-5"
            />
          </div>
          <div className="flex justify-center gap-2">
            <button
              className="h-10 w-30 cursor-pointer rounded-3xl bg-red-500 text-white hover:opacity-45"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cerrar
            </button>
            <button className="h-10 w-30 cursor-pointer rounded-3xl bg-white text-black hover:opacity-45">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
