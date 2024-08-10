import { FC, JSX } from "react";

interface ContentPageProps {
  subSectionName: string;
}

const ContentPage: FC<ContentPageProps> = ({ subSectionName }): JSX.Element => {
  return (
    <div className="flex flex-col justify-start items-center h-full">
      {/* Sub Section Name */}
      <div className="flex justify-center mt-10 text-xl font-semibold text-orange-500">
        {subSectionName}
      </div>
    </div>
  );
};

export { ContentPage };
