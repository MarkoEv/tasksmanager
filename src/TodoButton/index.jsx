import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  return (
    <>
      <div className="p-5">
        <button
          className="btn cursor-pointer rounded-xl bg-blue-800 p-3 text-xl hover:opacity-50"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          + Agregar Item
        </button>
      </div>
    </>
  );
}

export default TodoButton;
