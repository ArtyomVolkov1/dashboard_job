import { useState } from "react";
import TaskItem from "./TaskItem";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Modal from "../Modal/Modal";
import TaskFilter from "./TaskFilter";
import { openModal } from "../../store/slices/modalSlice";

const Tasks = () => {
  const [taskFilterValue, setTaskFilterValue] = useState("all");
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.persistedReducer.task.tasks);
  const isOpened = useAppSelector((state) => state.modal.isOpened);
  const handleAddTask = () => {
    dispatch(openModal({ type: "addingTask" }));
  };
  const getTaskFilterValue = (filterValue: string) => {
    setTaskFilterValue(filterValue);
  };
  return (
    <>
      <div className="flex justify-between mb-5">
        <TaskFilter getTaskFilterValue={getTaskFilterValue} />
        <button onClick={handleAddTask}>Создать задачу</button>
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-custom gap-4">
        {tasks
          .filter((task) => (taskFilterValue === "all" ? true : task.completed))
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
