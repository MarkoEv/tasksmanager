const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className="grid gap-2 p-5">
        <label form="search" className="text-2xl">
          Buscador :
        </label>
        <input
          name="search"
          placeholder="Buscador"
          className="rounded-2xl border bg-transparent p-2 text-3xl text-white"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            // console.log(searchValue);
          }}
        />
      </div>
    </>
  );
};

export default TodoSearch;
