import cities from "@/json/cities.json";

// Use a proper function declaration
const findLocation = (location: string): void => {
  Object.keys(cities).forEach((key) => {
    // Now we're in the object containing cities and names
    // Let's loop through the cities
    const state_cities = cities[key as keyof typeof cities].cities;
    // now the state_cities is an object of key value pairs of "city" : array of zip codes
    Object.keys(state_cities).forEach((city) => {
      const zip_codes = state_cities[city as keyof typeof state_cities];
      //   console.log("City:", city, "Zip Codes:", zip_codes);
      const zip_codes_array = zip_codes as string[];
      zip_codes_array.forEach((zip) => {
        if (Number.parseInt(zip) == Number.parseInt(location)) {
          console.log("Found location:", location, "in", city, key);
        }
      });
    });
  });
};

export default findLocation;
