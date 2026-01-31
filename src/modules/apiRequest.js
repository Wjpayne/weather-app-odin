const apiRequest = async (city) => {
  const apiKey = "5NTMTJWBAFWASNAZSL9AT5W7W";
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}`,
  );
  const data = await response.json();
  console.log(data);
  return data;
};
export default apiRequest;