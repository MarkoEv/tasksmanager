function TodosLoading() {
  return (
    <li className="flex animate-pulse items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md backdrop-blur-md">
      <div className="h-6 w-6 rounded-full bg-white/10" />
      <div className="h-4 flex-1 rounded bg-white/10" />
      <div className="h-6 w-6 rounded bg-white/10" />
    </li>
  );
}

export { TodosLoading };
