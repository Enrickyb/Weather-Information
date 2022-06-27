import React, { useContext } from "react";
import { useState } from "react";
import Link from "next/link";
import { ApiContext } from "../../context/ApiContext";

export default function SearchCity() {
  const [inputText, setInputText] = useState("");
  const { loadingWeather } = useContext(ApiContext);

  return (
    <div>
      <div>
        <p className="text-center m-auto w-[295px] mb-[35px] mt-[103px] font-semibold text-[16px]">
          Etapas fáceis para prever o clima e facilitar o seu dia a dia
        </p>
        <img
          className="m-auto"
          src="/images/weather2.png"
          alt="weather image"
        />
      </div>
    </div>
  );
}
