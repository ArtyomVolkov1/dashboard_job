import { useAppSelector } from "../../hooks/hooks";

const HomeTableCard = () => {
  const tasks = useAppSelector((state) => state.persistedReducer.task.tasks);
  const completedTask = tasks.filter((task) => task.completed === true);
  console.log(tasks);
  return (
    <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
          <div>
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
              Задачи
            </h6>
            <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
              <strong>{completedTask.length} выполненных</strong>
            </p>
          </div>
        </div>
        <div className="custom-scrollbar p-6 overflow-y-scroll h-96 xl:h-auto px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                  <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                    Название
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                  <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                    Репозиторий
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                  <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                    Статус выполнения
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <tr key={task.id}>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                          {task.task.title}
                        </p>
                      </div>
                    </td>

                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                        {task.task.selectOptions
                          ? task.task.selectOptions
                          : "Без репозитория"}
                      </p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="w-10/12">
                        <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                          {task.completed ? "Выполненно" : "Не выполненно"}
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeTableCard;
