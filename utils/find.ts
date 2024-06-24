import cities from "@/json/cities.json";

// Use a proper function declaration
const findLocation = (location: string): { city: string; state: string } => {
  for (const state of Object.keys(cities)) {
    const state_cities = cities[state as keyof typeof cities].cities;
    for (const city of Object.keys(state_cities)) {
      const zip_codes = state_cities[city as keyof typeof state_cities];
      const zip_codes_array = zip_codes as string[];
      for (const zip of zip_codes_array) {
        if (Number.parseInt(zip) === Number.parseInt(location)) {
          console.log("Found location:", location, "in", city, state);
          return { city, state };
        }
      }
    }
  }
  return { city: "Not Found", state: "Not Found" };
};

export default findLocation;
