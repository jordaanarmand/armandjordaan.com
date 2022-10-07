import React from "react";

interface ArticleProps {}

const Article: React.FC<ArticleProps> = () => {
  return (
    <>
      <div
        className="group mb-6 flex h-[189px] w-full flex-col border border-white bg-raisinBlack pt-8 pl-8
                    pr-8 pb-8 text-white hover:cursor-pointer hover:bg-white hover:text-raisinBlack"
      >
        <div className="flex flex-row place-content-between items-center pb-8">
          <div className="h-[5px] w-12 border-b-4 border-white group-hover:border-raisinBlack"></div>
          <h3 className="font-blenderProBold text-base">2022.10.06</h3>
        </div>
        <div>
          <h1 className="font-blenderProBold text-2xl">
            There are many variations of passages of Lorem Ipsum available, but
            the
          </h1>
        </div>
      </div>
    </>
  );
};

export default Article;
