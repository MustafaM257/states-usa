import { cn } from "@/utils/cn";

export const Grid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto  w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const GridItem = ({
  className,
  name,
  abbreviation,
  description,
  header,
}: {
  className?: string;
  name?: string | React.ReactNode;
  abbreviation?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " w-full h-full row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <span className="font-semibold text-red-600">{abbreviation}</span>
        <div className=" text-blue-600 font-bold  dark:text-neutral-200 mb-2 mt-2">
          {name}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
