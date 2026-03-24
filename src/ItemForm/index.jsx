import React from 'react';
import { TodoContext } from '../TodoContext';
import { FaPlus, FaTimes } from 'react-icons/fa';

function ItemForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newValues, setNewValues] = React.useState('');

  const onChange = (e) => {
    setNewValues(e.target.value);
  };

  const onClick = () => {
    if (newValues.trim()) {
      addTodo(newValues);
      setOpenModal(false);
    } else {
      alert('No puedes guardar una tarea vacía');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Nueva tarea</h2>
        <p className="text-sm text-gray-400">¿Qué vas a hacer hoy?</p>
      </div>

      <textarea
        placeholder="Escribe tu tarea..."
        className="h-28 w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 outline-none placeholder:text-gray-400 focus:border-white/30 focus:bg-white/10"
        value={newValues}
        onChange={onChange}
      />

      <div className="flex justify-end gap-3">
        <button
          className="flex items-center gap-2 rounded-xl bg-red-500/80 px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-red-500"
          onClick={() => setOpenModal(false)}
        >
          <FaTimes />
          Cancelar
        </button>

        <button
          className="flex items-center gap-2 rounded-xl bg-green-500/80 px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-green-500"
          onClick={onClick}
        >
          <FaPlus />
          Agregar
        </button>
      </div>
    </div>
  );
}

export { ItemForm };
