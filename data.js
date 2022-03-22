const API = "https://restaurants.barker.workers.dev/";

let restaurants;

async function getJSON(response) {
  if (response.ok) {
    const data = await response.json();
    return Promise.resolve(data);
  }

  const { status, statusText } = response;
  const error = new Error(`${status} ${statusText}`);

  return Promise.reject(error);
}

try {
  const response = await fetch(API);
  restaurants = await getJSON(response);
} catch (error) {
  restaurants = error;
}

export default restaurants;
