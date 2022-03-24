import { getJSON } from "./utils.js";

const API = "http://localhost:3000/restaurants/";

let restaurants;

try {
  const response = await fetch(API);
  restaurants = await getJSON(response);
} catch (error) {
  restaurants = error;
}

export { restaurants as default, API };
