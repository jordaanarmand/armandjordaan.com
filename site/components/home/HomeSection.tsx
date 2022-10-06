import React from "react";
import Image from "next/image";

interface HomeSectionProps {}

const HomeSection: React.FC<HomeSectionProps> = () => {
  return (
    <>
      <div className="h-screen bg-banner-main bg-cover bg-no-repeat">
        <div className="flex h-screen flex-row items-center justify-center">
          <div className="mr-10">
            <h1 className="font-blenderProHeavy text-6xl uppercase">
              armand jordaan
            </h1>
          </div>
          <div className="mr-10 basis-5">
            <Image
              src="/divider-main.svg"
              alt="divider"
              width={18}
              height={230}
            />
          </div>
          <div className="mr-10 basis-60">
            <h2 className="font-blenderProBold text-2xl uppercase">
              full stack <span className="text-steelPink">dotnet</span> software
              developer
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
