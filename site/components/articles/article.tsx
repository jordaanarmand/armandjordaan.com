import React from "react";
import { Article } from "./ArticlesData";

const Article: React.FC<Article> = ({ datePublished, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group col-span-12 flex h-[310px] flex-col overflow-hidden border border-2 border-white bg-raisinBlack
       pt-8 pl-8 pr-8 pb-8 text-white hover:cursor-pointer hover:bg-white hover:text-raisinBlack md:col-span-6 lg:col-span-4"
    >
      <div className="flex flex-row place-content-between items-center pb-8">
        <div className="h-[5px] w-12 border-b-4 border-white group-hover:border-raisinBlack"></div>
        <h3 className="font-blenderProBold text-base">{datePublished}</h3>
      </div>
      <div className="">
        <p className="font-blenderProBold text-2xl">{title}</p>
      </div>
    </a>
  );
};

export default Article;
