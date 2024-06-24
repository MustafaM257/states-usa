import React from "react";
import Link from "next/link";
import { GridItem } from "./ui/grid";
import StateFlag from "./StateFlag";

const StateItem = ({
  state,
  className,
}: {
  state: {
    postal_abbreviation: string;
    name: string;
  };
  className?: string;
}) => {
  return (
    <div className={className}>
      <Link href={`/state/${state.postal_abbreviation}`}>
        <GridItem
          className="rounded-md border-black max-w-sm mx-auto"
          name={state.name}
          abbreviation={state.postal_abbreviation}
          description={"A description for each state to go here"}
          header={<StateFlag abbreviation={state.postal_abbreviation} />}
        />
      </Link>
    </div>
  );
};

export default StateItem;
