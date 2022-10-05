import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <div className="h-screen bg-banner-main bg-cover bg-no-repeat">
        <div className="flex h-screen flex-row items-center justify-center">
          <div className="basis-92 mr-10">
            <h1 className="font-blenderProHeavy text-6xl uppercase leading-[77]">
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
      <div className="h-screen bg-raisinBlack"></div>
      <div className="h-screen bg-sky-400"></div>
      <div className="h-screen bg-sky-500"></div>
    </div>
    // <div className={styles.container}>
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    //   <div className="bg-sky-400 px-4">
    //     <h1>Hello World!</h1>
    //     <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
    //       Hello World!s
    //     </button>
    //   </div>
    //   <div
    //     className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
    //     style={{ width: "500px", height: "500px" }}
    //   >
    //     FOO BAR
    //   </div>
    // </div>
  );
};

export default Home;
