import { FaCheckCircle, FaTrash } from 'react-icons/fa';

function TodoItem(props) {
  return (
    <li className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-black shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-white dark:backdrop-blur-md dark:hover:bg-white/10">
      <button
        className={`cursor-pointer transition-all duration-300 ${
          props.completed
            ? 'scale-110 text-green-500'
            : 'text-gray-400 hover:scale-110 hover:text-green-500 dark:text-gray-500'
        }`}
        onClick={props.onComplete}
      >
        <FaCheckCircle size={22} />
      </button>
      <p
        className={`flex-1 text-sm transition-all duration-300 md:text-base ${
          props.completed
            ? 'text-gray-400 line-through dark:text-gray-500'
            : 'text-black dark:text-white'
        }`}
      >
        {props.text}
      </p>
      <button
        className="cursor-pointer text-red-500 opacity-70 transition-all duration-300 hover:scale-110 hover:opacity-100"
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
