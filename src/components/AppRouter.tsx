import { FC, JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { Page, PageProps } from "./Page";

const PAGES: PageProps[] = [
  { id: 1, path: "/*", pageName: "Home Page" },
  { id: 2, path: "/about//*", pageName: "About Page" },
  { id: 3, path: "/contact//*", pageName: "Contact Page" },
];

const AppRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      {PAGES.map((page) => (
        <Route
          key={page.id}
          path={page.path}
          element={<Page key={page.id} {...page} />}
        />
      ))}

      <Route
          path="*"
          element={<Page pageName="Home Page" id={0} path="/" />}
        />
    </Routes>
  );
};

export { AppRouter };
