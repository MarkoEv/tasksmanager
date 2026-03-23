function TodosLoading() {
  return (
    <li className="flex animate-pulse items-center justify-between rounded-xl border border-white p-3">
      <div className="h-5 w-5 rounded-full bg-white" />
      <div className="mx-3 h-4 flex-1 rounded bg-white" />
      <div className="h-5 w-5 rounded bg-white" />
    </li>
  );
}

export { TodosLoading };
