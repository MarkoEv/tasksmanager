import React from 'react';
import { FaSearch } from 'react-icons/fa';

const TodoSearch = ({ searchValue, setSearchValue, searchRef }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-md focus-within:border-black focus-within:shadow-lg dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md dark:focus-within:border-white dark:focus-within:bg-white/10">
        <FaSearch className="text-lg text-gray-400 dark:text-gray-500" />

        <input
          ref={searchRef}
          name="search"
          placeholder="Buscar tarea..."
          className="w-full bg-transparent text-sm text-black outline-none placeholder:text-gray-400 md:text-base dark:text-white dark:placeholder:text-gray-500"
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
