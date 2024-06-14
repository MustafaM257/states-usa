import Image from "next/image";
import React from "react";
import { cn } from "@/utils/cn";

const StateFlag = ({
  abbreviation,
  className,
}: {
  abbreviation: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-1 w-full h-full min-h-[6rem]",
        className
      )}
    >
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
