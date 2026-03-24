import { FaCheckCircle, FaTrash } from 'react-icons/fa';

function TodoItem(props) {
  return (
    <li className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-lg">
      <button
        className={`transition-all duration-300 ${
          props.completed
            ? 'scale-110 text-green-400'
            : 'text-gray-400 hover:scale-110 hover:text-green-400'
        }`}
        onClick={props.onComplete}
      >
        <FaCheckCircle size={22} />
      </button>
      <p
        className={`flex-1 text-sm transition-all duration-300 md:text-base ${
          props.completed ? 'text-gray-400 line-through' : 'text-white'
        }`}
      >
        {props.text}
      </p>
      <button
        className="text-red-400 opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100"
        onClick={() => {
          if (confirm('¿Estás seguro de eliminar esta tarea?')) {
            props.onDelete();
          }
        }}
      >
        <FaTrash size={20} />
      </button>
    </li>
  );
}

export default TodoItem;
