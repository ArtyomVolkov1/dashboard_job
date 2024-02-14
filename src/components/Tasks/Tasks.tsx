import { useState } from "react";
import TaskItem from "./TaskItem";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Modal from "../Modal/Modal";
import TaskFilter from "./TaskFilter";
import { openModal } from "../../store/slices/modalSlice";
import { getModalState, getTasks } from "../../store/selectors";

const Tasks = () => {
  const [taskFilterValue, setTaskFilterValue] = useState("all");
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(getTasks);
  const filterTasks = tasks.filter((task) => {
    switch (taskFilterValue) {
      case "all":
        return task;
      case "completed":
        return task.completed;
      case "unCompleted":
        return !task.completed;
      default:
        return task;
    }
  });
  const isOpened = useAppSelector(getModalState);
  const handleAddTask = () => {
    dispatch(openModal({ type: "addingTask" }));
  };
  const getTaskFilterValue = (filterValue: string) => {
    setTaskFilterValue(filterValue);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <TaskFilter getTaskFilterValue={getTaskFilterValue} />
        <button
          className="inline-block w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
          onClick={handleAddTask}
        >
          Создать задачу
        </button>
      </div>
      <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-custom gap-4">
        {filterTasks
          .map((task) => (
            <TaskItem
              key={task.id}
              completed={task.completed}
              id={task.id}
              title={task.task.title}
              description={task.task.description}
              selectOptions={task.task.selectOptions}
            />
          ))}
      </div>
      {isOpened && <Modal />}
    </>
  );
};

export default Tasks;
