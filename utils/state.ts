// Import the JSON file
import states from "@/json/states.json";

// Define the type for a State
type State = {
  id: number;
  name: string;
  postal_abbreviation: string;
  capital: string;
  largest_city: string;
  ratification_or_admission: string;
  population_2020: number;
  total_area_mi2: number;
  total_area_km2: number;
  representatives: number;
  description: string;
};

// Function to get a state by its postal abbreviation
export const getStateByAbbreviation = (slug: string): State | undefined => {
  return states.find(
    (state: State) =>
      state.postal_abbreviation.toLowerCase() === slug.toLowerCase()
  );
};
