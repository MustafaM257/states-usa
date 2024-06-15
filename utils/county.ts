// Import the JSON file
import counties from "@/json/counties.json";

// Define the type for a County
type County = {
  State: string;
  County: string;
};

// Function to get counties by state name
export const getCountiesByState = (name: string): County[] => {
  return counties.filter(
    (county) => county.State.toLowerCase() === name.toLowerCase()
  );
};
