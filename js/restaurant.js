import restaurants from "./data.js";

function main() {
  if (restaurants instanceof Error) {
    app.innerHTML = getErrorHTML(restaurants);
  } else {
    const id = getRestaurantId();
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    app.innerHTML = getRestaurantHTML(restaurant);
  }
}

function getErrorHTML(error) {
  console.error(error);
  document.title = "Error - Restaurant Directory";

  return `
    <h1>Error - Restaurant Directory</h1>
    <p>There was a problem. Try again later.</p>
  `;
}

function getRestaurantId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function getRestaurantHTML({ name, image_url, menus }) {
  document.title = `${name} - Restaurant Directory`;

  return `
    <header>
      <h1>${name}</h1>
      <img src="${image_url}" alt="A ${name} restaurant." />
    </header>
    <main>
      <div class="grid">
        ${menus.map(getMenuHTML).join("")}
      </div>
    </main>
  `;
}

function getMenuHTML({ title, items }) {
  return `
    <article class="menu">
      <h2>${title}</h2>
      <ul>
        ${items.map(getItemHTML).join("")}
      </ul>
    </article>
  `;
}

function getItemHTML({ dish, price }) {
  const priceInPounds = (price / 100).toFixed(2);
  return `<li>${dish} - &pound;${priceInPounds}</li>`;
}

main();
