import React, { useContext } from "react";
import getWeather from "../data/getWeather";
import { useState } from "react";
import Link from "next/link";
import { ApiContext } from "../context/ApiContext";

export default function SearchCity() {
  const [inputText, setInputText] = useState("");
  const { loadingWeather } = useContext(ApiContext);

  return (
    <div>
      <h1 className="font-bold text-2xl text-center mb-10 mt-20">
        Search for a City
      </h1>

      <form>
        <div className="relative w-4/5 flex justify-center">
          <input
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search your City..."
            required
          />
          {/* FALTA VERIFICAÇÃO */}
          <Link href={"city-weather"}>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault()
                loadingWeather(inputText);
              }}
            >
              Search
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
