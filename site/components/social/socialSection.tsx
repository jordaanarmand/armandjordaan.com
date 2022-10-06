import React from "react";
import Image from "next/image";

interface SocialSectionProps {}

const SocialSection: React.FC<SocialSectionProps> = () => {
  return (
    <>
      <div className="border-b-2 border-raisinBlack bg-richLemon pt-16 pr-20 pl-20 pb-16">
        <div className="flex w-full flex-row space-x-40">
          <div
            className="h-10 w-44 flex-none bg-raisinBlack pl-2"
            style={{
              clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 63%, 93% 100%)",
            }}
          >
            <span className="inline-block w-full align-middle font-blenderProBold text-4xl uppercase text-richLemon">
              social
            </span>
          </div>
          <div className="grow">
            <div className="flex flex-row space-x-5">
              <a
                className="group"
                href="https://github.com/jordaanarmand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="h-[48px] w-[48px] bg-electricBlue group-hover:cursor-pointer group-hover:bg-white"
                  style={{
                    clipPath:
                      "polygon(0% 70%, 0% 0%, 100% 0%, 100% 100%, 30% 100%)",
                  }}
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="m-auto">
                      <Image
                        src="/social-github.svg"
                        alt="github"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="group"
                href="https://github.com/jordaanarmand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="h-[48px] w-[48px] bg-electricBlue group-hover:cursor-pointer group-hover:bg-white"
                  style={{
                    clipPath:
                      "polygon(0% 70%, 0% 0%, 100% 0%, 100% 100%, 30% 100%)",
                  }}
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="m-auto">
                      <Image
                        src="/social-github.svg"
                        alt="github"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="group"
                href="https://github.com/jordaanarmand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="h-[48px] w-[48px] bg-electricBlue group-hover:cursor-pointer group-hover:bg-white"
                  style={{
                    clipPath:
                      "polygon(0% 70%, 0% 0%, 100% 0%, 100% 100%, 30% 100%)",
                  }}
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="m-auto">
                      <Image
                        src="/social-github.svg"
                        alt="github"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="group"
                href="https://github.com/jordaanarmand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="h-[48px] w-[48px] bg-electricBlue group-hover:cursor-pointer group-hover:bg-white"
                  style={{
                    clipPath:
                      "polygon(0% 70%, 0% 0%, 100% 0%, 100% 100%, 30% 100%)",
                  }}
                >
                  <div className="flex h-full items-center justify-center">
                    <div className="m-auto">
                      <Image
                        src="/social-github.svg"
                        alt="github"
                        width={26}
                        height={26}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSection;
