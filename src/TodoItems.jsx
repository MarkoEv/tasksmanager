import { FaCheckCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

function TodoItem(props) {
  return (
    <li className="flex justify-between rounded-xl border border-blue-800 p-3 text-xl opacity-80 hover:opacity-100">
      <button
        className={
          props.completed ? 'text-green-500' : 'cursor-pointer text-white'
        }
        onClick={props.onComplete}
      >
        <FaCheckCircle size={20} />
      </button>
      <p className={`${props.completed ? 'line-through' : ''}`}>{props.text}</p>
      <button
        className="btn cursor-pointer text-center text-[17px]"
        onClick={() => {
          if (confirm('Estás seguro de eliminarlo')) {
            props.onDelete();
          }
        }}
      >
        <FaTrash size={20} color="red" />
      </button>
    </li>
  );
}

export default TodoItem;
