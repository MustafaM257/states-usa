"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import states from "@/json/states.json";
import StateFlag from "./StateFlag";
export default function StateList() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {/* {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))} */}
      {states.map((state, i) => (
        <BentoGridItem
          key={i}
          name={state.name}
          abbreviation={state.postal_abbreviation}
          description={"A description for each state to go here"}
          header={<StateFlag abbreviation={state.postal_abbreviation} />}
        />
      ))}
    </BentoGrid>
  );
}
