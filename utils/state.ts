import states from "@/json/states.json";

export const getStateByAbbreviation = (slug: string) => {
  return states.find(
    (state) => state.postal_abbreviation.toLowerCase() === slug.toLowerCase()
  );
};
