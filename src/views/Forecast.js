import React, { useState } from "react";
import axios from "axios";
import ForecastStats from "../components/ForecastStats";

export default function Forecast() {
  const [city, setCity] = useState("");
  const [forecastData, setForecastData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=yes&days=3`
    );
    setForecastData(response.data.forecast.forecastday);
  };

  return (
    <div className="p-5">
      <section className="mb-5">
        <h1 className="font-bold underline text-2xl">What is Weat-React?</h1>
        <p>
          Forecast weather API method returns upto next 10 day weather forecast
          and weather alert as json. The data is returned as a Forecast Object.
        </p>
        <br />
        <p>
          Forecast object contains astronomy data, day weather forecast and
          hourly interval weather information for a given city.
        </p>
      </section>

      <form
        className="flex gap-5 w-1/3 m-auto mt-10 p-5 bg-gray-500"
        onSubmit={handleSubmit}
      >
        <div className="grow">
          <input
            type="text"
            name="city"
            placeholder="Enter a city..."
            onChange={(e) => setCity(e.target.value)}
            className="h-12 w-full border border-gray-400 focus:outline-none rounded-lg px-3"
          />
        </div>
        <button
          className="h-12 grow rounded-lg bg-blue-600 hover:bg-blue-500 text-white active:outline-none disabled:bg-gray-300"
          disabled={!city}
        >
          Search
        </button>
      </form>

      {/* conditionally render Realtime Stats */}
      {
        forecastData.length ? (
          <ForecastStats data={forecastData} />
        ) : (
          "Searching..."
        )
      }
    </div>
  );
}
