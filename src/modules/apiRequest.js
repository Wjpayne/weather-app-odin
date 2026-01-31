const apiRequest = async (city) => {
  const apiKey = "5NTMTJWBAFWASNAZSL9AT5W7W";
  const unit = "us"
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=${apiKey}`,
  );
  const data = await response.json();
  console.log(data);
  return data;
};
export default apiRequest;