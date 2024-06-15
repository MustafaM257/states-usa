// Import the JSON file
import counties from "@/json/counties.json";

// Define the type for a County
type County = {
  state: string;
  county: string;
};

// Function to get counties by state name
export const getCountiesByState = (name: string): County[] | undefined => {
  return counties.filter(
    (county) => county.state.toLowerCase() === name.toLowerCase()
  );
};
