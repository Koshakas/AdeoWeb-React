import snowflake from "../assets/snowflake.svg";
import umbrella from "../assets/umbrella.svg";
import sunglasses from "../assets/sunglasses.svg";

async function forecastUrl() {
  // const clear = ["clear", "isolated-clouds", "scattered-clouds", "na"];
  const overcast = ["overcast", "light-rain", "moderate-rain", "heavy-rain", "fog"];
  const snow = ["sleet", "light-snow", "moderate-snow", "heavy-snow"];

  let weather;
  const response = await fetch("https://cors.bridged.cc/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term");
  const data = await response.json();
  weather = data.forecastTimestamps[0].conditionCode;
  if (snow.includes(weather)) return snowflake;
  else if (overcast.includes(weather)) return umbrella;
  else return sunglasses;
}

export default forecastUrl;
