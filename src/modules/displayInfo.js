import apiRequest from "./apiRequest";

const displayInfo = async (city) => {
  const data = await apiRequest(city);

  const cityElement = document.getElementById("location");
  cityElement.textContent = `${data.resolvedAddress}`;

  const dateElement = document.getElementById("date");
  dateElement.textContent = `${data.days[0].datetime}`;

  const hiLowElement = document.getElementById("hi-low");
  hiLowElement.textContent = `High: ${data.days[0].tempmax}°F  Low: ${data.days[0].tempmin}°F`;

  const tempElement = document.getElementById("temperature");
  tempElement.textContent = `Current Temperature: ${data.currentConditions.temp} °F`;

  const conditionsElement = document.getElementById("conditions");
  conditionsElement.textContent = `Conditions: ${data.currentConditions.conditions}`;
};

export default displayInfo;
