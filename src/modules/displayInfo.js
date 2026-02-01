import apiRequest from "./apiRequest";


const displayInfo = async (city) => {

  try {
  const data = await apiRequest(city);

  const cityElement = document.getElementById("location");
  cityElement.textContent = `${data.resolvedAddress}`;

  const dateElement = document.getElementById("date");
  dateElement.textContent = `${data.days[0].datetime}`;

  const hiLowElement = document.getElementById("hi-low");
  hiLowElement.textContent = `High: ${data.days[0].tempmax}°F  Low: ${data.days[0].tempmin}°F`;

  const tempElement = document.getElementById("temperature");
  tempElement.textContent = `Current Temperature: ${data.currentConditions.temp}°F`;

  const conditionsElement = document.getElementById("conditions");
  conditionsElement.textContent = `Conditions: ${data.currentConditions.conditions}`;

  } catch (error) {
    console.error("Error fetching or displaying data:", error);
    alert("Could not fetch weather data. Please try again.");
  }

  

};

export default displayInfo;
