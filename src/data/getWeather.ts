import axios from "axios";


async function getWeather(city: string) {
  
  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=260d67a679f241cba98204226222106&q=${city}&aqi=no`
  );
  return data
}
export default getWeather;
