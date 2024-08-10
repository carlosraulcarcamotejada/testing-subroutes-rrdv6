import { FC, Fragment, JSX } from "react";
import { PageProps } from "./Page";
import { NavLink } from "react-router-dom";

interface SideNavListPros {
  sideNavItems: PageProps[];
  pageName: string;
}

const SideNavList: FC<SideNavListPros> = ({
  sideNavItems,
  pageName,
}): JSX.Element => {
  return (
    <nav className="flex flex-col justify-start gap-y-4 w-full h-screen border-r dark:border-r-gray-800 bg-white dark:bg-black">
      <div className="text-gray-300 h-12 grid place-content-center bg-blue-950 font-bold text-lg bg-gradient-to-r from-teal-600 to-cyan-600">
        {pageName}
      </div>
      {sideNavItems.map((sideNavItem) => {
        return (
          <Fragment key={sideNavItem.id}>
            <NavLink
              to={sideNavItem.path}
              // onClick={() => setActiveOption(sideNavItem.id)}
              className={({ isActive }) => `
                        ${isActive ? "text-red-600" : ""}
                        ${!isActive ? "text-gray-700 dark:text-gray-300" : ""}

                        h-10
                        flex
                        items-center
                        justify-start
                        w-full
                        pl-2
                        hover:underline
                        cursor-pointer
                        
                        `}
            >
              {sideNavItem.pageName}
            </NavLink>
            <hr className="mx-2 dark:border-t-gray-800" />
          </Fragment>
        );
      })}
    </nav>
  );
};

export { SideNavList };
