import React from "react";

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
                <div
                  className="flex h-[403px] w-full flex-col bg-electricBlue pt-8 pl-8 pr-8 pb-8 text-raisinBlack hover:bg-white"
                  style={{
                    clipPath:
                      "polygon(0% 100%, 0% 7%, 7% 0%, 100% 0%, 100% 100%)",
                  }}
                >
                  <div className="flex flex-row place-content-between items-center pb-8">
                    <div className="h-[5px] w-12 border-b-4 border-raisinBlack"></div>
                    <h3 className="font-blenderProBold text-base">
                      2022.10.06
                    </h3>
                  </div>
                  <div>
                    <h1 className="font-blenderProBold text-2xl text-raisinBlack">
                      There are many variations of passages of Lorem Ipsum
                      available, but the
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="group mb-6 flex h-[189px] w-full flex-col border border-white bg-raisinBlack pt-8 pl-8
                    pr-8 pb-8 text-white hover:bg-white hover:text-raisinBlack"
                >
                  <div className="flex flex-row place-content-between items-center pb-8">
                    <div className="h-[5px] w-12 border-b-4 border-white group-hover:border-raisinBlack"></div>
                    <h3 className="font-blenderProBold text-base">
                      2022.10.06
                    </h3>
                  </div>
                  <div>
                    <h1 className="font-blenderProBold text-2xl">
                      There are many variations of passages of Lorem Ipsum
                      available, but the
                    </h1>
                  </div>
                </div>
                <div
                  className="group flex h-[189px] w-full flex-col border border-white bg-raisinBlack pt-8 pl-8
                    pr-8 pb-8 text-white hover:bg-white hover:text-raisinBlack"
                >
                  <div className="flex flex-row place-content-between items-center pb-8">
                    <div className="h-[5px] w-12 border-b-4 border-white group-hover:border-raisinBlack"></div>
                    <h3 className="font-blenderProBold text-base">
                      2022.10.06
                    </h3>
                  </div>
                  <div>
                    <h1 className="font-blenderProBold text-2xl">
                      There are many variations of passages of Lorem Ipsum
                      available, but the
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="group mb-6 flex h-[189px] w-full flex-col border border-white bg-raisinBlack pt-8 pl-8
                    pr-8 pb-8 text-white hover:bg-white hover:text-raisinBlack"
                >
                  <div className="flex flex-row place-content-between items-center pb-8">
                    <div className="h-[5px] w-12 border-b-4 border-white group-hover:border-raisinBlack"></div>
                    <h3 className="font-blenderProBold text-base">
                      2022.10.06
                    </h3>
                  </div>
                  <div>
                    <h1 className="font-blenderProBold text-2xl">
                      There are many variations of passages of Lorem Ipsum
                      available, but the
                    </h1>
                  </div>
                </div>
                <div
                  className="group flex h-[189px] w-full flex-col border border-white bg-raisinBlack pt-8 pl-8
                    pr-8 pb-8 text-white hover:bg-white hover:text-raisinBlack"
                >
                  <div className="flex flex-row place-content-between items-center pb-8">
                    <div className="h-[5px] w-12 border-b-4 border-white group-hover:border-raisinBlack"></div>
                    <h3 className="font-blenderProBold text-base">
                      2022.10.06
                    </h3>
                  </div>
                  <div>
                    <h1 className="font-blenderProBold text-2xl">
                      There are many variations of passages of Lorem Ipsum
                      available, but the
                    </h1>
                  </div>
                </div>
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
