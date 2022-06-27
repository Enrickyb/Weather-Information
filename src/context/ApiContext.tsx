import { createContext, ReactNode, useState } from "react";
import getWeather from "../data/getWeather";

type contextType = {
  loadingWeather: (value: string) => void;
  onSetData: () => void;
  data: any;
};
type dataType = {
  current: {
    temp_c: number;
    condition: { text: string; icon: string };
    wind_kph: number;
  };
  location: { name: string; region: string; localtime: string };
};
type ApiProviderProps = {
  children: ReactNode
}

export const ApiContext = createContext({} as contextType);

export function ApiProvider(props: ApiProviderProps) {
  const [data, setData] = useState<dataType | null>();

  async function loadingWeather(city: string) {
    if (city) {
      let weatherData: dataType = await getWeather(city);
      setData(weatherData);
    } else {
      alert("Erro, insira a cidade");
    }
  }
  function onSetData() {
    setData(null);
  }

  return (
    <ApiContext.Provider value={{ loadingWeather, data, onSetData }}>
      {props.children}
    </ApiContext.Provider>
  );
}
