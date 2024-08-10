import { FC, JSX, memo } from "react";
import { SideNavList } from "./SideNavList";
import { Routes, Route } from "react-router-dom";
import { ContentPage } from "./ContentPage";

interface PageProps {
  id: number;
  path: string;
  pageName: string;
}

const SIDE_NAV_SECTIONS: PageProps[] = [
  { id: 1, path: "sub-section-1", pageName: "Sub-Section 1" },
  { id: 2, path: "sub-section-2", pageName: "Sub-Section 2" },
  { id: 3, path: "sub-section-3", pageName: "Sub-Section 3" },
  { id: 4, path: "sub-section-4", pageName: "Sub-Section 4" },
  { id: 5, path: "sub-section-5", pageName: "Sub-Section 5" },
];

const Page: FC<PageProps> = memo(({ pageName }): JSX.Element => {
  return (
    <div className="w-full pl-48 h-screen pt-14">
      {/* Side Nav List */}
      <div className="w-48 fixed left-0 top-14">
        <SideNavList sideNavItems={SIDE_NAV_SECTIONS} pageName={pageName} />
      </div>
      {/* <div className="text-center text-4xl text-gray-300">mis pelotas</div> */}
      {/* Routes */}
      <Routes>
        {SIDE_NAV_SECTIONS.map((sideNavSectionItem) => (
          <Route
            key={sideNavSectionItem.id}
            path={sideNavSectionItem.path}
            element={
              <ContentPage
                key={sideNavSectionItem.id}
                subSectionName={sideNavSectionItem.pageName}
              />
            }
          />
        ))}
      </Routes>

      {/* Content Page */}
      {/* {contentPage} */}
    </div>
  );
});

export type { PageProps };
export { Page };
