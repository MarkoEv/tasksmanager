import { FaSearch } from 'react-icons/fa';

function EmptySearchResults(props) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-3 py-3 text-black shadow-sm hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-white dark:backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-lg text-gray-400 opacity-80 dark:bg-white/10 dark:text-gray-500">
          <FaSearch />
        </div>

        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Buscando:{' '}
          <span className="font-semibold text-black dark:text-white">
            {props.textSearch}
          </span>
        </h3>
      </div>

      <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
        Resultados:{' '}
        <span className="font-semibold text-black dark:text-white">
          {props.todosResults.length}
        </span>
      </p>
    </div>
  );
}

export { EmptySearchResults };
