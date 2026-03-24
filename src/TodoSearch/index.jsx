import React from 'react';
import { TodoContext } from '../TodoContext';
import { FaSearch } from 'react-icons/fa';

const TodoSearch = () => {
  const { searchValue, setSearchValue, searchRef } =
    React.useContext(TodoContext);

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-md backdrop-blur-md transition-all duration-300 focus-within:border-white focus-within:bg-white/10 focus-within:shadow-lg">
        <FaSearch className="text-lg text-gray-400" />
        <input
          ref={searchRef}
          name="search"
          placeholder="Buscar tarea..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400 md:text-base"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default TodoSearch;
