import React from "react";
import Image from "next/image";
import SocialItem from "../social/socialItem";

interface HomeSectionProps {}

const HomeSection: React.FC<HomeSectionProps> = () => {
  return (
    <>
      <div className="h-screen bg-banner-main bg-cover bg-no-repeat">
        <div className="flex h-screen flex-row items-center justify-center">
          <div className="mr-10 flex flex-col">
            <div className="mb-5">
              <h1 className="font-blenderProHeavy text-6xl uppercase">
                armand
              </h1>
            </div>
            <div>
              <span className="font-blenderProHeavy text-6xl uppercase">
                jordaan
              </span>
            </div>
          </div>
          <div className="mr-10 basis-5">
            <Image
              src="/divider-main.svg"
              alt="divider"
              width={18}
              height={230}
            />
          </div>
          <div className="flex flex-col">
            <div>
              <span className="font-blenderProBold text-3xl uppercase">
                full stack <span className="text-steelPink">dotnet</span>{" "}
              </span>
            </div>
            <div className="pb-5">
              <span className="font-blenderProBold text-3xl uppercase">
                software developer
              </span>
            </div>
            <div className="flex flex-row space-x-5 pb-5">
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
            <div className="flex flex-row space-x-5">
              <SocialItem
                link={"https://twitter.com/jordaan_armand"}
                altText={"twitter"}
                imgType={"twitter"}
                imgWidth={26}
                imgHeight={26}
              />
              <SocialItem
                link={"https://www.instagram.com/jordaan_armand/"}
                altText={"instagram"}
                imgType={"instagram"}
                imgWidth={26}
                imgHeight={26}
              />
              <SocialItem
                link={"https://www.facebook.com/armandjordaan77/"}
                altText={"facebook"}
                imgType={"facebook"}
                imgWidth={26}
                imgHeight={26}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
