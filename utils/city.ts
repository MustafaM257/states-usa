import cities from "@/json/cities.json";

type City = {
  city: string;
  state: string;
};
export const getCitiesByState = (name: string): City[] | undefined => {
  return cities.filter(
    (city) => city.state.toLowerCase() === name.toLowerCase()
  );
};
