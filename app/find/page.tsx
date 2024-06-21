"use client";
import React from "react";
import { useState } from "react";
const page = () => {
  // const [search, setSearch] = useState("");
  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log("Searching...");
  };
  return (
    <div className="space-y-10 pt-32 ">
      <div>
        <label
          htmlFor="name"
          className="ml-px block pl-4 text-sm font-medium leading-6 text-gray-900"
        >
          Search for a city, state, or zip code
        </label>
        <form className="mt-2" onSubmit={handleSearch}>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-full border-0 px-4 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 outline-none"
            placeholder="Jane Smith"
          />
        </form>
      </div>
    </div>
  );
};

export default page;
