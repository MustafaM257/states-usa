import React from "react";
import { getAllZipCodes } from "@/utils/zip";

const zipcodes = getAllZipCodes();

const Page = () => {
  return (
    <div className="space-y-10 pt-32">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0 text-center"
                >
                  State
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                >
                  Capital
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                >
                  Zip Codes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {zipcodes.map((zipcode, index) => {
                const rowClass =
                  index % 2 === 0 ? "hover:bg-red-100" : "hover:bg-blue-100";
                return (
                  <tr key={zipcode.state} className={rowClass}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-center">
                      {zipcode.state}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                      {zipcode.capital}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                      {zipcode.zip}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
