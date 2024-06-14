import Image from "next/image";
import React from "react";

const StateFlag = ({ abbreviation }: { abbreviation: string }) => {
  return (
    <div className=" relative flex flex-1 w-full h-full min-h-[6rem]">
      <Image
        src={`/images/flags/${abbreviation}.png`}
        alt={`${abbreviation} state flag`}
        fill={true}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="rounded-md"
      />
    </div>
  );
};

export default StateFlag;
