function TodoButton() {
  return (
    <>
      <div className="p-5">
        <button
          className="btn cursor-pointer rounded-xl bg-blue-800 p-3 text-xl hover:opacity-50"
          onClick={(e) => {
            console.log(e.target);
            console.log(e);
          }}
        >
          + Agregar Item
        </button>
      </div>
    </>
  );
}

export default TodoButton;
