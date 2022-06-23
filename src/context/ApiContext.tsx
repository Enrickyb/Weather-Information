import { createContext, useState } from "react";
import getWeather from "../data/getWeather";

type contextType = {
  loadingWeather: (value: string)=> void;
}

export const ApiContext = createContext({} as contextType)

export function ApiProvider(props: any) {
  const [data, setData] = useState();

  async function loadingWeather(city: string) {
    let weatherData = await getWeather(city);
    setData(weatherData);
    console.log(weatherData);
  }

  return (
    <ApiContext.Provider value={{ loadingWeather }}>
      {props.children}
    </ApiContext.Provider>
  );
}

