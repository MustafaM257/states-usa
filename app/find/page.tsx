"use client";
import React, { useState } from "react";
import findLocation from "@/utils/find";
import StateItem from "@/components/StateItem";

const Page = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({ city: "", state: "" });
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", search);
    // Add your search logic here
    const res = findLocation(search);
    setResult({
      city: res.city,
      state: res.state,
    });
    setSearchPerformed(true); // Set searchPerformed to true after the search
  };

  return (
    <div
      className="space-y-10 pt-32 "
      style={{ minHeight: `calc(100vh - 25vh)` }}
    >
      <div>
        <label
          htmlFor="search"
          className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900"
        >
          Search for a city or state by ZIP code
        </label>
        <form className="mt-2" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="block w-full rounded-full border-0 px-4 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 outline-none"
            placeholder="Jane Smith"
          />
        </form>
        {searchPerformed && // Only render the result section after a search has been performed
          (result.city !== "Not Found" && result.state ? (
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {result.city} {result.state}
              </h2>
              <StateItem
                state={{
                  postal_abbreviation: result.state,
                  name: result.state,
                }}
              />
            </div>
          ) : (
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-red-600">
                Location not found
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
