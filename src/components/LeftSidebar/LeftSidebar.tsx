import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../constants";
import { INavLink } from "../../types";
import { useState } from "react";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        className={`leftsidebar border-e transition-transform ${
          !open && "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <button
            onClick={() => setOpen(false)}
            className="md:sr-only text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <Link to={"/"} className="flex items-center ps-2.5 mb-5">
            <span className="self-center h3-bold font-semibold whitespace-nowrap hover:text-blue-500 ">
              Dashboard
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            {sidebarLinks.map((link: INavLink) => {
              const isActive = pathname === link.route;
              return (
                <li
                  key={link.label}
                  className={`p-1 base-regular text-gray-900 rounded-lg transition-all ${
                    isActive && "bg-gray-100"
                  } hover:bg-gray-100  group`}
                >
                  <NavLink
                    to={link.route}
                    onClick={() => setOpen(false)}
                    className={`flex gap-4 items-center p-4 ms-3 hover:text-blue-500 ${
                      isActive && "text-blue-500"
                    }`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;

// className={`leftsidebar-link group ${
//   isActive && "border-e-4 border-blue-500"
// } ${!open && 'scale-0'}`}
