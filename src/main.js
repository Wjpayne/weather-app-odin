import displayInfo from "./modules/displayInfo.js";

const form = document.getElementById("user-form");
const cityInput = document.getElementById("city-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;
  displayInfo(city);
  form.reset();
});
