import React, { useContext } from "react";
import { ApiContext } from "../../context/ApiContext";

export default function Conditions() {
  const { data } = useContext(ApiContext);

  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const currentDate = day + "-" + month + "-" + year;

  return (
    <div>
      <div className="flex flex-row w-[80%] m-auto items-center justify-between">
        <h1 className=" text-[16px] font-semibold">{data.location.name}</h1>
        <p className="text-[14px] font-semibold">{currentDate}</p>
      </div>

      <div>
        <div className="w-80 h-[140px] relative flex flex-row gap-10 justify-center mt-[29px] mb-15 bg-white m-auto rounded-[10px] items-center">
          <img
            className="w-[54px] absolute -top-8"
            src="/images/weather.png"
            alt=""
          />
          <div className="text-center">
            <p className="mb-[21px]">Vento</p>
            <p>{data.current.wind_kph} km/h</p>
          </div>
          <div className="text-center">
            <p className="mb-[21px]">Temperatura</p>
            <p>{data.current.temp_c}°C</p>
          </div>
          <div className="text-center">
            <p className="mb-[21px]">Umidade</p>
            <p>{data.current.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
