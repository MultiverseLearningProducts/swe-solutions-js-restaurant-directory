import restaurants from "./data.js";

const app = document.querySelector("#app");

if (restaurants instanceof Error) {
  app.textContent = "There was a problem. Try again later.";
  console.error(restaurants);
} else {
  console.log(restaurants);
  // TODO: Build HTML string
}
