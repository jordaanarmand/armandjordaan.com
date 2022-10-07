import React from "react";

interface SpotlightArticleProps {}

const SpotlightArticle: React.FC<SpotlightArticleProps> = () => {
  return (
    <>
      <div
        className="flex h-[403px] w-full flex-col bg-electricBlue pt-8 pl-8 pr-8 pb-8 text-raisinBlack hover:cursor-pointer hover:bg-white"
        style={{
          clipPath: "polygon(0% 100%, 0% 7%, 7% 0%, 100% 0%, 100% 100%)",
        }}
      >
        <div className="flex flex-row place-content-between items-center pb-8">
          <div className="h-[5px] w-12 border-b-4 border-raisinBlack"></div>
          <h3 className="font-blenderProBold text-base">2022.10.06</h3>
        </div>
        <div>
          <h1 className="font-blenderProBold text-2xl text-raisinBlack">
            There are many variations of passages of Lorem Ipsum available, but
            the
          </h1>
        </div>
      </div>
    </>
  );
};

export default SpotlightArticle;
