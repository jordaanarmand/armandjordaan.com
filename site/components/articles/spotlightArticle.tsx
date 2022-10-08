import React from "react";
import { Article } from "./ArticlesData";

const SpotlightArticle: React.FC<Article> = ({
  datePublished,
  title,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-12 flex h-[310px] flex-col bg-electricBlue pt-8 pl-8 pr-8 pb-8
         text-raisinBlack hover:cursor-pointer hover:bg-white md:col-span-12 lg:col-span-4"
      style={{
        clipPath: "polygon(0% 100%, 0% 10%, 10% 0%, 100% 0%, 100% 100%)",
      }}
    >
      <div>
        <div className="flex flex-row place-content-between items-center pb-8">
          <div className="h-[5px] w-12 border-b-4 border-raisinBlack"></div>
          <h3 className="font-blenderProBold text-base">{datePublished}</h3>
        </div>
        <div className="overflow-hidden text-clip">
          <p className="font-blenderProBold text-2xl text-raisinBlack">
            {title}
          </p>
        </div>
      </div>
    </a>
  );
};

export default SpotlightArticle;
