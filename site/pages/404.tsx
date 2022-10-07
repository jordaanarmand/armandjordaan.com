import React from "react";

interface Custom404Props {}

const Custom404: React.FC<Custom404Props> = () => {
  return (
    <>
      <div className="h-screen bg-banner-main bg-cover bg-no-repeat">
        <div className="flex h-screen flex-row items-center justify-center">
          <div className="mr-10 flex flex-col">
            <div className="mb-5">
              <h1 className="font-blenderProHeavy text-3xl uppercase">
                404 - This is not the page you are looking for.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
