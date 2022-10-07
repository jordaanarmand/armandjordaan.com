import React from "react";
import Image from "next/image";

interface SocialItemProps {
  link: string;
  altText: string;
  imgType: string;
  imgWidth: number;
  imgHeight: number;
}

const SocialItem: React.FC<SocialItemProps> = ({
  link,
  altText,
  imgType,
  imgWidth,
  imgHeight,
}) => {
  return (
    <>
      <a
        className="group"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="h-[48px] w-[48px] bg-electricBlue group-hover:cursor-pointer group-hover:bg-white"
          style={{
            clipPath: "polygon(0% 70%, 0% 0%, 100% 0%, 100% 100%, 30% 100%)",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="m-auto">
              <Image
                src={`/social-${imgType}.svg`}
                alt={altText}
                width={imgWidth}
                height={imgHeight}
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default SocialItem;
