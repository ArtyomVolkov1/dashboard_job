import React, { useState } from "react";

type FilterTaskProps = {
  getTaskFilterValue: (filterValue: string) => void;
};

const TaskFilter = ({ getTaskFilterValue }: FilterTaskProps) => {
  const [filterTaskVal, setFilterTaskVal] = useState("all");
  const handleFilterTaskChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterTaskVal(e.target.value);
    getTaskFilterValue(e.target.value);
  };
  return (
    <select
      onChange={handleFilterTaskChanges}
      value={filterTaskVal}
      className="mt-1.5 focus:outline-none rounded-md bg-slate-100 border-indigo-500 text-gray-700 sm:text-sm"
    >
      <option value="all">Все задачи</option>
      <option value="completed">Выполненные</option>
      <option value="unCompleted">Не выполненные</option>
    </select>
  );
};

export default TaskFilter;
