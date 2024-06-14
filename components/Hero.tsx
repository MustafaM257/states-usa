import usa_bg from "@/public/images/usa_bg.jpg";
import usa_map from "@/public/images/usa_map.svg";
import Image from "next/image";

export default function Example() {
  return (
    <div className="relative overflow-hidden text-center  pt-32 lg:pt-52">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline text-blue-700">
          Let&apos;s explore{" "}
        </span>{" "}
        <span className="block text-red-600 xl:inline">America</span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl ">
        The United States of America is a vast country in North America. Each
        star on the flag represents a state.{" "}
      </p>
      <div className="flex flex-col items-center">
        <Image
          src={usa_map}
          alt="USA Flag"
          className=" select-none md:max-w-2xl"
        />
      </div>
    </div>
  );
}
