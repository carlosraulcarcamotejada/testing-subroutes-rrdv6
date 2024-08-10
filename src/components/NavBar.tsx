import { FC, JSX } from "react";
import { NavLink } from "react-router-dom";

interface NavLinksPros {
  id: number;
  label: string;
  path: string;
}

const NAV_LINKS: NavLinksPros[] = [
  {
    id: 1,
    label: "home",
    path: "/",
  },
  {
    id: 2,
    label: "about",
    path: "/about/",
  },
  {
    id: 3,
    label: "contact",
    path: "/contact/",
  },
];

const NavBar: FC = (): JSX.Element => {
  return (
    <nav className="fixed top-0 left-0 w-full h-14 border-b dark:border-b-gray-800 bg-white dark:bg-black grid grid-cols-12">
      {/* Brand Logo */}
      <div className="col-start-2 col-span-1 flex items-center justify-start w-full">
        <img className="w-10 h-10" src="/react.svg" alt="Icon" />
      </div>

      {/* Links */}
      <div className="col-end-12 col-span-3 flex items-center justify-end gap-x-6">
        {NAV_LINKS.map(({ id, label, path }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) => `
                                        ${
                                          isActive
                                            ? "bg-gradient-to-b from-teal-400 to-blue-500"
                                            : "     "
                                        }
                                        ${
                                          isActive
                                            ? "active:bg-gradient-to-b active:from-teal-500 active:to-blue-600"
                                            : ""
                                        }
                                        ${
                                          isActive
                                            ? "hover:from-teal-300 hover:to-blue-400"
                                            : ""
                                        }
                                        ${isActive ? "" : ""}

                                        ${
                                          !isActive
                                            ? "hover:bg-gradient-to-b from-gray-200 to-slate-100 "
                                            : ""
                                        }
                                        ${
                                          !isActive
                                            ? "dark:hover:bg-gradient-to-b dark:hover:from-gray-800 dark:hover:to-slate-900"
                                            : ""
                                        }
                                        ${
                                          !isActive
                                            ? "dark:hover:text-gray-300"
                                            : ""
                                        }
                                        ${
                                          !isActive
                                            ? "active:bg-gradient-to-b active:from-gray-300 active:to-slate-200"
                                            : ""
                                        }
                                        ${!isActive ? "dark:text-gray-300" : ""}



                                        px-3
                                        py-1.5 
                                        rounded-lg 
                                        transition-all 
                                        duration-150
            `}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export { NavBar };
