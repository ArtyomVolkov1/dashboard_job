import { useAppDispatch } from "../../hooks/hooks";
import { openModal } from "../../store/slices/modalSlice";
import { toogleTask } from "../../store/slices/taskSlice";

type TaskItemProps = {
  title?: string;
  description?: string;
  selectOptions?: string;
  id: string;
  completed: boolean;
};

const TaskItem = ({
  title,
  description,
  selectOptions,
  id,
  completed,
}: TaskItemProps) => {
  const dispatch = useAppDispatch();
  const handleToggleTaskChange = () => {
    dispatch(toogleTask({ taskId: id }));
  };

  const handleDeleteTask = (taskId: string) => {
    dispatch(openModal({ type: "delitingTask", taskId: taskId }));
  };
  const handleEditTask = (taskId: string) => {
    dispatch(openModal({ type: "renamingTask", taskId: taskId }));
  };
  const handleViewTask = (taskId: string) => {
    dispatch(openModal({ type: "lookingTask", taskId: taskId }));
  };

  return (
    <div className="flex flex-wrap place-items-center">
      <div
        className={`relative w-full overflow-hidden rounded-xl  ${
          completed && "border-2 border-green-400"
        } bg-white p-4 shadow-lg md:w-96`}
      >
        <div className="mb-2 flex items-center gap-2 border-b-2 py-2">
          <div className="base-medium">Репозиторий:</div>
          <div className="text-base text-gray-600">{selectOptions}</div>
        </div>
        <div className="w-full">
          <div className="mb-2 flex items-center gap-2">
            <span className="base-medium">Задача:</span>
            <span className="text-base text-gray-600">{title}</span>
          </div>
          <p className="mb-2 base-medium">Что нужно сделать:</p>
          <p className="mb-4 small-regular text-gray-400 truncate">
            {description}
          </p>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="flex items-center gap-2">
            <label
              htmlFor="green-checkbox"
              className="small-regular text-gray-900"
            >
              Завершить
            </label>
            <input
              onChange={handleToggleTaskChange}
              checked={completed ? true : false}
              type="checkbox"
              value=""
              className="w-4 h-4 text-green-600"
            />
          </div>
          <div className="flex gap-5">
            <button onClick={() => handleViewTask(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033ZM10.5 7.5V13.5M13.5 10.5H7.5"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={() => handleEditTask(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L6.83218 19.8195C6.30351 20.3481 5.65144 20.7368 4.93489 20.9502L2.25 21.75L3.04978 19.0651C3.26323 18.3486 3.65185 17.6965 4.18052 17.1678L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={() => handleDeleteTask(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.25 7.5L19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321L3.75 7.5M9.75 11.625L12 13.875M12 13.875L14.25 16.125M12 13.875L14.25 11.625M12 13.875L9.75 16.125M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
