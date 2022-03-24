import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify@2/dist/purify.es.min.js";
import { getJSON, serialize, stringToHTML } from "./utils.js";
import restaurants, { API } from "./data.js";

const app = document.querySelector("#app");

function main() {
  if (restaurants instanceof Error) {
    app.textContent = "There was a problem. Try again later.";
    console.error(restaurants);
  } else {
    // Listen for submit events
    app.addEventListener("submit", handleSubmit);

    // Insert the HTML string
    app.innerHTML = `
      ${isAdmin() ? getFormHTML() : ""}
      <div class="grid">
        ${DOMPurify.sanitize(restaurants.map(getRestaurantHTML).join(""))}
      </div>
    `;
  }
}

function isAdmin() {
  const params = new URLSearchParams(window.location.search);
  return params.get("admin") === "true";
}

function getFormHTML() {
  return `
    <form action="${API}" method="POST">
      <p>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" required />
      </p>
      <p>
        <label for="image_url">Image URL</label>
        <input id="image_url" name="image_url" type="url" required />
      </p>
      <p>
        <button type="submit">Create restaurant</button>
      </p>
    </form>
  `;
}

async function handleSubmit(event) {
  // Prevent the default form submission behaviour
  event.preventDefault();

  // The event.target is the element that fired the submit event
  const form = event.target;

  // Serialize the form data into a JSON string
  const body = serialize(form);

  // Destructure the .method and .action properties from the HTMLFormElement
  const { method, action } = form;

  // We need to tell our server that we're sending JSON data
  const headers = { "Content-Type": "application/json" };

  // Select the grid of restaurants from the HTML
  const grid = document.querySelector(".grid");

  try {
    // Post the form data to our server; this sends back the new restaurant
    const response = await fetch(action, { method, headers, body });

    // Parse the response into a real JavaScript object
    const restaurantObject = await getJSON(response);

    // Create an HTML string based on the restaurant object
    const restaurantHTML = getRestaurantHTML(restaurantObject);

    // Create a real HTML element from the HTML string
    const restaurantElement = stringToHTML(restaurantHTML);

    // Append the new restaurant element to the restaurant grid
    grid.append(restaurantElement);
  } catch (error) {
    console.error(error);
    alert("Failed to create restaurant. Try again later.");
  }

  // Wipe the form
  form.reset();
}

function getRestaurantHTML({ id, name, image_url }) {
  return `
    <article class="restaurant">
      <h2>
        <a href="restaurant.html?id=${id}">${name}</a>
      </h2>
      <img src="${image_url}" alt="A ${name} restaurant." />
    </article>
  `;
}

main();
