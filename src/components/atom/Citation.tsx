import Image from "next/image";
import React, { FC } from "react";

type CitationProps = {
  url: string;
  name: string;
};

const Citation: FC<CitationProps> = ({ url, name }) => {
  return (
    <div className="w-[158px] overflow-hidden flex gap-4 items-center">
      <Image
        src={url}
        width={50}
        height={50}
        alt="citation"
        className="w-[50px] h-[50px] rounded-full"
      />
      <span className="text-user-R text-[var(--BRAND_1)]">{name}</span>
    </div>
  );
};
export default Citation;
