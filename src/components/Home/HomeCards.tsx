import { useAppSelector } from "../../hooks/hooks";
import HomeCard from './HomeCard';

const HomeCards = () => {
  const tasks = useAppSelector((state) => state.persistedReducer.task.tasks);
  const completedTask = tasks.filter((task) => task.completed === true);
  console.log('Все',tasks)
  return (
    <>
    <HomeCard title='Количество задач' count={tasks.length} />
    <HomeCard title='Выполненных' count={completedTask.length} />
    <HomeCard title='Статистика за день' description='Выполненно:' count={2} />
    </>
  );
};

export default HomeCards;




// Это карточки для дашборда. Использовать их!

{/* <div class="min-h-screen bg-gray-50/50">
  <div class="p-4 xl:ml-80">
    <div class="mt-12">
      <div class="mb-12 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="absolute mx-4 -mt-4 grid h-16 w-16 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-border text-white shadow-lg shadow-blue-500/40">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.25C7.5 3.59315 8.84315 2.25 10.5 2.25H13.5C15.1569 2.25 16.5 3.59315 16.5 5.25V5.45498C17.4325 5.54034 18.3574 5.65196 19.274 5.78912C20.7281 6.00668 21.75 7.27163 21.75 8.70569V11.7389C21.75 12.95 21.0164 14.0913 19.8137 14.4911C17.3566 15.308 14.7292 15.75 12 15.75C9.27087 15.75 6.64342 15.308 4.18627 14.4911C2.98364 14.0912 2.25 12.95 2.25 11.7389V8.70569C2.25 7.27163 3.27191 6.00668 4.72596 5.78912C5.6426 5.65196 6.56753 5.54034 7.5 5.45498V5.25ZM15 5.25V5.34082C14.0077 5.28056 13.0074 5.25 12 5.25C10.9927 5.25 9.99235 5.28056 9 5.34082V5.25C9 4.42157 9.67157 3.75 10.5 3.75H13.5C14.3284 3.75 15 4.42157 15 5.25ZM12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75C11.25 13.1642 11.5858 13.5 12 13.5Z" fill="currentColor" />
              <path d="M3 18.4V15.6039C3.22304 15.7263 3.46097 15.8307 3.71303 15.9145C6.32087 16.7815 9.10801 17.25 12 17.25C14.892 17.25 17.6791 16.7815 20.287 15.9145C20.539 15.8307 20.777 15.7263 21 15.604V18.4C21 19.8519 19.9528 21.1275 18.4769 21.3234C16.3575 21.6048 14.1955 21.75 12 21.75C9.80447 21.75 7.64246 21.6048 5.52314 21.3234C4.04724 21.1275 3 19.8519 3 18.4Z" fill="currentColor" />
            </svg>
          </div>
          <div class="p-4 text-center">
            <p class="text-blue-gray-600 block font-sans text-sm font-normal leading-normal antialiased">Всего задач</p>
            <h4 class="text-blue-gray-900 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">10</h4>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="absolute mx-4 -mt-4 grid h-16 w-16 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="text-blue-gray-600 block font-sans text-sm font-normal leading-normal antialiased">Репозиториев добавленно</p>
            <h4 class="text-blue-gray-900 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">2,300</h4>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="absolute mx-4 -mt-4 grid h-16 w-16 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-green-600 to-green-400 bg-clip-border text-white shadow-lg shadow-green-500/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="text-blue-gray-600 block font-sans text-sm font-normal leading-normal antialiased">Выполненно задач</p>
            <h4 class="text-blue-gray-900 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">3,462</h4>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="absolute mx-4 -mt-4 grid h-16 w-16 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-border text-white shadow-lg shadow-orange-500/40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-white">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="text-blue-gray-600 block font-sans text-sm font-normal leading-normal antialiased">Любимый репозиторий</p>
            <h4 class="text-blue-gray-900 block font-sans text-lg font-semibold leading-snug tracking-normal antialiased">Название репозитория</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
