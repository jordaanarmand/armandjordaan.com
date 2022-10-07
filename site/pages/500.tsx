import React from "react";

interface Custom500Props {}

const Custom500: React.FC<Custom500Props> = () => {
  return (
    <>
      <div className="h-screen bg-banner-main bg-cover bg-no-repeat">
        <div className="flex h-screen flex-row items-center justify-center">
          <div className="mr-10 flex flex-col">
            <div className="mb-5">
              <h1 className="font-blenderProHeavy text-3xl uppercase">
                500 - The netrunners are at it again :(
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom500;
