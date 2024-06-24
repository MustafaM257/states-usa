"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { Grid, GridItem } from "@/components/ui/grid";
import states from "@/json/states.json";
import StateFlag from "./StateFlag";
import Link from "next/link";
import StateItem from "./StateItem";
export default function StateList() {
  return (
    <Grid className="max-w-4xl mx-auto">
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
        <StateItem state={state} key={i} />
      ))}
    </Grid>
  );
}
