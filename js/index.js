import DOMPurify from "https://cdn.jsdelivr.net/npm/dompurify@2/dist/purify.es.min.js";
import restaurants from "./data.js";

const app = document.querySelector("#app");

function main() {
  if (restaurants instanceof Error) {
    app.textContent = "There was a problem. Try again later.";
    console.error(restaurants);
  } else {
    app.innerHTML = `
      <div class="grid">
        ${DOMPurify.sanitize(restaurants.map(getRestaurantHTML).join(""))}
      </div>
    `;
  }
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

// If you find it easier to read, you can write your main() function like this.

// function main() {
//   if (restaurants instanceof Error) {
//     app.textContent = "There was a problem. Try again later.";
//     console.error(restaurants);
//   } else {
//     let htmlString = "<div class='grid'>";

//     for (const restaurant of restaurants) {
//       htmlString += getRestaurantHTML(restaurant);
//     }

//     htmlString += "</div>";

//     app.innerHTML = htmlString;
//   }
// }
