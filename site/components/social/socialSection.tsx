import React from "react";
import Image from "next/image";
import SocialItem from "./socialItem";

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

export default SocialSection;
