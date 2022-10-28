import React from "react";
import SocialItem from "../social/socialItem";

interface HomeSectionProps {}

const HomeSection: React.FC<HomeSectionProps> = () => {
  return (
    <>
      <div className="h-screen bg-banner-main bg-cover bg-no-repeat">
        <div className="flex h-screen items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-9">
            <div className="h-40 w-full flex-none md:col-span-4 md:h-60">
              <div className="w-full flex-none md:h-60">
                <div className="flex h-full flex-col items-center justify-center">
                  <div>
                    <h1 className="font-blenderProHeavy text-6xl uppercase">
                      armand
                    </h1>
                  </div>
                  <div>
                    <h2 className="font-blenderProHeavy text-6xl uppercase">
                      jordaan
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-10 md:h-60">
              <div className="h-5 bg-divider-main-horizontal bg-center bg-no-repeat md:h-full md:bg-divider-main"></div>
            </div>
            <div className="h-20 w-full flex-none md:col-span-4">
              <div className="w-full flex-none md:h-60">
                <div className="flex h-full flex-col items-center justify-center">
                  <div>
                    <span className="font-blenderProBold text-3xl uppercase">
                      full stack <span className="text-steelPink">dotnet</span>
                    </span>
                  </div>
                  <div>
                    <span className="font-blenderProBold text-3xl uppercase">
                      software developer
                    </span>
                  </div>
                  <div className="mt-5 flex w-full flex-row items-center justify-center space-x-2 md:mt-3">
                    <SocialItem
                      link={"https://github.com/jordaanarmand"}
                      altText={"github"}
                      imgType={"github"}
                      imgWidth={26}
                      imgHeight={26}
                    />
                    <SocialItem
                      link={
                        "https://www.youtube.com/channel/UCm4-aTDRUHGUb9T3EgNWDog"
                      }
                      altText={"youtube"}
                      imgType={"youtube"}
                      imgWidth={26}
                      imgHeight={26}
                    />
                    <SocialItem
                      link={"https://www.linkedin.com/in/armandjordaan/"}
                      altText={"linkedin"}
                      imgType={"linkedin"}
                      imgWidth={26}
                      imgHeight={26}
                    />
                  </div>
                  <div className="mt-2 flex w-full flex-row items-center justify-center space-x-2 md:mt-3">
                    <SocialItem
                      link={"https://twitter.com/jordaan_armand"}
                      altText={"twitter"}
                      imgType={"twitter"}
                      imgWidth={26}
                      imgHeight={26}
                    />
                    <SocialItem
                      link={"https://www.instagram.com/blackbeardcoding/"}
                      altText={"instagram"}
                      imgType={"instagram"}
                      imgWidth={26}
                      imgHeight={26}
                    />
                    <SocialItem
                      link={"https://armandjordaan.hashnode.dev/"}
                      altText={"blog"}
                      imgType={"blog"}
                      imgWidth={26}
                      imgHeight={26}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
