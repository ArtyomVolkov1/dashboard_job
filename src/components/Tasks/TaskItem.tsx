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
  return (
    <div className="flex flex-wrap place-items-center">
      <div className={`relative w-72 overflow-hidden rounded-xl  ${completed && "border-2 border-green-400"} bg-white p-4 shadow-lg md:w-96`}>
        <div className="mb-2 flex items-center gap-2 border-b-2 py-2">
          <div className="font-medium">Репозиторий:</div>
          <div className="text-base text-gray-600">{selectOptions}</div>
        </div>
        <div className="w-full">
          <div className="mb-2 text-lg gap-1 font-medium">
            Задача: <span className="text-base text-gray-600">{title}</span>
          </div>
          <p className="mb-2 text-lg font-medium">Что нужно сделать:</p>
          <p className="mb-4 text-sm text-gray-400">{description}</p>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="flex items-center gap-2">
            <label
              htmlFor="green-checkbox"
              className="text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              {" "}
              Завершить{" "}
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

{
  /* <div
className={`bg-white  rounded-xl border ${
  completed && "border-2 border-green-400"
} border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6`}
>
<span className="inline-block rounded">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M8.25 15H15.75M8.25 18H12M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
      stroke="#0F172A"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</span>
<h3 className="mt-0.5 border-y-current border-b-[1px] text-lg font-normal text-gray-700">
  Задача: {title}
</h3>
<p className="mt-0.5 flex-nowrap border-y-current border-b-[1px] text-lg font-normal text-gray-700">
  Репозиторий: {selectOptions}
</p>
<span className="mt-0.5 text-lg font-normal text-gray-700">
  Описание задачи:
</span>
<p className=" text-sm/relaxed text-gray-700">{description}</p>
<div className="mt-3 flex justify-between">
  <div className="flex items-center gap-2">
    <label
      htmlFor="green-checkbox"
      className="text-sm font-medium text-gray-900 dark:text-gray-400"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
  </div>
</div>
</div> */
}
