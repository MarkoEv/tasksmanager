import React from 'react';
import { TodoContext } from '../TodoContext';

function ItemForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  // estado local
  const [newValues, setNewValues] = React.useState('');
  // recibir el evento
  const onChange = (e) => {
    setNewValues(e.target.value);
  };
  // al dar click en agregar
  const onClick = () => {
    if (newValues) {
      addTodo(newValues);
      setOpenModal(false);
    } else {
      alert('No puedes guardar una tarea vacía, el campo es obligatorio');
    }
  };

  return (
    <div className="grid w-full gap-5 p-5">
      <div className="grid justify-center gap-2">
        <label className="text-xl" htmlFor="item">
          ¿Qué vas a comprar Hoy?
        </label>
        <textarea
          placeholder="Escribe aquí..."
          className="h-23 w-full rounded-2xl bg-white/10 p-5"
          value={newValues}
          onChange={onChange}
        />
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="h-10 w-30 cursor-pointer rounded-3xl bg-red-500 text-white hover:opacity-45"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Cancelar
        </button>
        <button
          className="h-10 w-30 cursor-pointer rounded-3xl bg-white text-black hover:opacity-45"
          onClick={onClick}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export { ItemForm };
