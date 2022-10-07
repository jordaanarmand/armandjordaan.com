import React from "react";
import SpotlightArticle from "./spotlightArticle";
import Article from "./article";

interface ArticlesProps {}

const ArticlesSection: React.FC<ArticlesProps> = () => {
  return (
    <>
      <div>
        <div className="flex w-full flex-col bg-raisinBlack">
          <div className="h-8 w-full bg-divider-articles-top"></div>
          <div className="pl-20 pr-20 pt-16 pb-24">
            <h1 className="pl-2 pb-2 font-blenderProBold text-4xl uppercase text-richLemon">
              Articles
            </h1>
            <div className="h-4 w-[180px] bg-divider-title-text"></div>

            <div className="grid grid-cols-3 gap-4 pt-16">
              <div>
                <SpotlightArticle />
              </div>
              <div>
                <Article />
                <Article />
              </div>
              <div>
                <Article />
                <Article />
              </div>
            </div>
          </div>
          <div className="h-8 w-full rotate-180 bg-divider-articles-top"></div>
        </div>
      </div>
    </>
  );
};

export default ArticlesSection;
