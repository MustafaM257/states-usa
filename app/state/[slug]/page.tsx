import React from "react";
import states from "@/json/states.json";
import StateFlag from "@/components/StateFlag";
import { cn } from "@/utils/cn";

const page = ({ params }: { params: { slug: string } }) => {
  const state = states.find(
    (state) =>
      state.postal_abbreviation.toLowerCase() === params.slug.toLowerCase()
  );
  if (!state) {
    return (
      <div className="space-y-10 mt-52">
        <h1 className="text-4xl font-bold text-center">State Not Found</h1>
      </div>
    );
  }
  return (
    <div className="space-y-10 mt-52">
      <StateFlag
        abbreviation={state.postal_abbreviation}
        className="w-32 h-32"
      />
    </div>
  );
};

export default page;
