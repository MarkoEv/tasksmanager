function TodosLoading() {
  return (
    <li className="flex animate-pulse items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-gray-100 p-4 shadow-md dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md">
      <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-white/10" />
      <div className="h-4 flex-1 rounded bg-gray-300 dark:bg-white/10" />
      <div className="h-6 w-6 rounded bg-gray-300 dark:bg-white/10" />
    </li>
  );
}

export { TodosLoading };
