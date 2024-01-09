/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useEffect, useState } from "react";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../../store/github/github.api";
import { useDebounce } from "../../hooks/debounce";
import RepoCard from "./RepoCard";
import Skeleton from "../Skeleton/Skeleton";

const SearchRepo = () => {
  const [search, setSearch] = useState("");
  const [dropdownVisibily, setDropdownVisibily] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, data: users } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: isRepoLoading, data: repos }] =
    useLazyGetUserReposQuery();
  const handleClik = (username: string) => {
    fetchRepos(username);
    setDropdownVisibily(false);
  };
  useEffect(() => {
    setDropdownVisibily(debounced.length > 3 && users?.length! > 0);
  }, [debounced, users]);
  return (
    <>
      <div className="flex justify-center">
        <div className="relative flex h-16 items-center w-80">
          <label htmlFor="Search" className="sr-only ">
            Search
          </label>
          <input
            type="text"
            placeholder="Введите ваш логин на github"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block w-full rounded-md sm:text-sm focus:ring-1 "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="submit" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
          <div className="absolute right-0 top-14 z-50 w-64 rounded-lg border border-gray-100 bg-white shadow-lg">
            {dropdownVisibily && (
              <ul className="max-h-64 space-y-1 overflow-auto p-2">
                {isLoading && <p className="text-center">Загрузка...</p>}
                {users?.map((user) => (
                  <li
                    onClick={() => handleClik(user.login)}
                    className="py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer"
                    key={user.id}
                  >
                    {user.login}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className=" mt-10 mb-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-custom gap-4">
        {/* Карточки */}
        {isRepoLoading && <Skeleton />}
        {repos?.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  );
};

export default SearchRepo;

// absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white
