import React from "react";
import SpotlightArticle from "./spotlightArticle";
import Article from "./article";
import { data } from "./ArticlesData";
interface ArticlesProps {}

const ArticlesSection: React.FC<ArticlesProps> = () => {
  return (
    <div className="flex w-full flex-col bg-raisinBlack">
      <div className="h-8 w-full bg-divider-articles-top" />
      <div className="pl-5 pr-5 pt-16 pb-24 md:pl-20 md:pr-20">
        <h1 className="pl-2 pb-2 font-blenderProBold text-4xl uppercase text-richLemon">
          Articles
        </h1>
        <div className="h-4 w-[180px] bg-divider-title-text"></div>
        <div className="mt-16 grid grid-cols-12 gap-7">
          {data.map((_, i) => {
            if (_.isSpotlight)
              return (
                <SpotlightArticle
                  key={i}
                  title={_.title}
                  subtitle={_.subtitle}
                  link={_.link}
                  isSpotlight={_.isSpotlight}
                  datePublished={_.datePublished}
                />
              );

            return (
              <Article
                key={i}
                title={_.title}
                subtitle={_.subtitle}
                link={_.link}
                isSpotlight={_.isSpotlight}
                datePublished={_.datePublished}
              />
            );
          })}
        </div>
      </div>
      <div className="h-8 w-full rotate-180 bg-divider-articles-top" />
    </div>
  );
};

export default ArticlesSection;
