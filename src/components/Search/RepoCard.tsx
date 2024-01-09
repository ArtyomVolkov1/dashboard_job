import React from "react";
import { IRepo } from "../../types/models";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addRepos, deleteRepos } from "../../store/slices/githubSlice";
// import { getRepoById } from "../../selectors";

// Добавить popup на ошибку что этот репозиторий уже добавлен. Ошибку выводить error.

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const colorLang =
    repo.language === "JavaScript" ? "bg-yellow-500" : "bg-blue-500";
  const dispatch = useAppDispatch();
  const repos = useAppSelector((state) => state.persistedReducer.github.repos);
  const correctDate = repo.updated_at.split('T')[0];
  const isAddedRepo = repos.find(({id}) => id === repo.id);
  const addToNameRepos = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addRepos({
        key: repo.full_name,
        value: repo.name,
        id: repo.id,
      })
    );
  };
  const deleteRepo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(deleteRepos({
      id: repo.id,
      key: repo.full_name
    }));
  }
  return (
    <div className="card-repository">
      <div className="flex justify-end mb-2">
        <div className="card-repository__visibility">
          <div className="mt-px">{repo.visibility}</div>
        </div>
      </div>
      <div className="mb-2 flex items-center gap-3">
        <p className="card-repository__name ">Репозиторий: {repo.name} </p>
      </div>
      <div className="mb-2 flex items-center gap-3">
        <p className="card-repository__name">
          Пользователь: {repo.owner.login}
        </p>
      </div>
      <div className="mt-4">
        <button
          onClick={isAddedRepo ? deleteRepo : addToNameRepos}
          className={`inline-flex items-center justify-center rounded-lg ${isAddedRepo ? "bg-yellow-500" : "bg-blue-500"} px-3 py-2 text-center text-sm font-medium text-white ${isAddedRepo ? "hover:bg-yellow-600" : "hover:bg-blue-700"} active:scale-x-105`}
        >
          {isAddedRepo ? "Добавлен" :"Добавить в работу"}
        </button>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className={`h-3 w-3 rounded-full ${colorLang}`}></span>
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            {repo.language ? repo.language : "Нет данных"}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="-mt-0.5 h-4 w-4 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            {repo.stargazers_count}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="-mt-px h-4 w-4 text-green-300"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
            {correctDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
