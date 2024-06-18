import React from "react";
import states from "@/json/states.json";
import StateFlag from "@/components/StateFlag";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { after } from "node:test";
import { getStateByAbbreviation } from "@/utils/state";
import { getCountiesByState } from "@/utils/county";
const page = ({ params }: { params: { slug: string } }) => {
  const state = getStateByAbbreviation(params.slug);

  if (!state) {
    return (
      <div className="space-y-10 mt-52">
        <h1 className="text-4xl font-bold text-center">State Not Found</h1>
      </div>
    );
  }
  const [beforeDot, afterDot] = state.description.split(/\.(.+)/, 2);
  const counties = getCountiesByState(state?.name);
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-red-600">
                {state.postal_abbreviation}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {state.name}
              </h1>
              <p className="mt-6 text-md font-bold leading-8 text-gray-700">
                {beforeDot}
                {/*  Everything before the . */}
              </p>
            </div>
          </div>
        </div>
        <div className=" relative -ml-12 -mt-12 p-12 lg:sticky lg:top-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            src={`/images/flags/${state.postal_abbreviation}.png`}
            alt={`${state.postal_abbreviation} flag`}
            layout="responsive"
            width={640} // Specify the width of the image
            height={480} // Specify the height of the image
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                {afterDot}
                {/* Everything after the . */}
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Population:
                    </strong>{" "}
                    {state.population_2020.toLocaleString()}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Area:
                    </strong>{" "}
                    {state.total_area_mi2.toLocaleString()} sq mi
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Capital:
                    </strong>{" "}
                    {state.capital}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Largest City:
                    </strong>{" "}
                    {state.largest_city}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Date of Admisson:
                    </strong>{" "}
                    {state.ratification_or_admission}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Number of Representatives:
                    </strong>{" "}
                    {state.representatives}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Number of Counties:
                    </strong>{" "}
                    {counties.length}
                  </span>
                </li>
              </ul>
              <h1 className="text-2xl mt-8 mb-4 text-gray-900 font-semibold w-full text-left">
                List of counties:{" "}
              </h1>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {counties.map((county) => (
                  <div
                    key={county.county}
                    className="relative flex items-center space-x-3 rounded-full border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-offset-2 hover:border-gray-400"
                  >
                    <div className="min-w-0 flex-1">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">
                        {county.county}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
