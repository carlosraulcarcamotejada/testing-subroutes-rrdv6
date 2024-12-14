import { FC, JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { Page, PageProps } from "./Page";

const PAGES: PageProps[] = [
  { id: 2, path: "/about//*", pageName: "About Page" },
  { id: 3, path: "/contact//*", pageName: "Contact Page" },
];

const AppRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <div className="text-xl font-semibold text-orange-500 mt-20 text-center">
            Home page
          </div>
        }
      />
      {PAGES.map((page) => (
        <Route
          key={page.id}
          path={page.path}
          element={<Page key={page.id} {...page} />}
        />
      ))}
    </Routes>
  );
};

export { AppRouter };
