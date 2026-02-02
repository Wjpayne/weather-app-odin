import apiRequest from "./apiRequest";

const displayInfo = async (city) => {
  const data = await apiRequest(city);

  // ---------- CURRENT WEATHER ----------
  document.getElementById("location").textContent = data.resolvedAddress;

  document.getElementById("date").textContent = data.days[0].datetime;

  document.getElementById("hi-low").textContent =
    `High: ${data.days[0].tempmax}°F  Low: ${data.days[0].tempmin}°F`;

  document.getElementById("temperature").textContent =
    `Current Temperature: ${data.currentConditions.temp}°F`;

  document.getElementById("conditions").textContent =
    `Conditions: ${data.currentConditions.conditions}`;

  // ---------- DAILY FORECAST ----------
  const forecastContainer = document.getElementById("forecast-cards");
  forecastContainer.innerHTML = ""; // clear previous search

  data.days.slice(1, 8).forEach((day) => {
    const card = document.createElement("div");
    card.classList.add("forecast-card");

    const date = document.createElement("h3");
    date.textContent = new Date(day.datetime).toLocaleDateString("en-US", {
      weekday: "short",
    });

    const temps = document.createElement("p");
    temps.classList.add("temp");
    temps.textContent = `${day.tempmax}° / ${day.tempmin}°`;

    const conditions = document.createElement("p");
    conditions.classList.add("conditions");
    conditions.textContent = day.conditions;

    card.append(date, temps, conditions);
    forecastContainer.appendChild(card);
  });
};

export default displayInfo;
