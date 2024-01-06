import React from "react";

const HomeTableCard = () => {
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
              <strong>30 выполненных</strong>
            </p>
          </div>
        </div>
        <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
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
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      Material XD Version
                    </p>
                  </div>
                </td>

                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                    $14,000
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="w-10/12">
                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                      60%
                    </p>
                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                      <div
                        className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      Add Progress Track
                    </p>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                    $3,000
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="w-10/12">
                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                      10%
                    </p>
                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                      <div
                        className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      Fix Platform Errors
                    </p>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                    Not set
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="w-10/12">
                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                      100%
                    </p>
                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                      <div
                        className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      Launch our Mobile App
                    </p>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                    $20,500
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="w-10/12">
                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                      100%
                    </p>
                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                      <div
                        className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      Add the New Pricing Page
                    </p>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                    $500
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="w-10/12">
                    <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                      25%
                    </p>
                    <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                      <div
                        className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeTableCard;
