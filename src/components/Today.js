import React, { useEffect } from "react";
import sunrise from "./../images/sunrise.svg";
import sunset from "./../images/sunset.svg";
import moonrise from "./../images/moonrise.svg";
import moonset from "./../images/moonset.svg";
import thermometer from "./../images/thermometer.svg";
import humidity from "./../images/humidity.svg";
import barometer from "./../images/barometer.svg";
import wind from "./../images/wind.svg";
import windsock from "./../images/windsock.svg";
import uvindex from "./../images/uv-index.svg";
import haze from "./../images/haze.svg";
import dustwind from "./../images/dust-wind.svg";
import raindrops from "./../images/raindrops.svg";
import { useSelector } from "react-redux";

export default function Today() {
  const location = useSelector((state) => state.weather.location)
	const weather = useSelector((state) => state.weather.weather)
  const celsiusScale = useSelector((state) => state.weather.celsiusScale);
  const astro = useSelector((state) => state.weather.astro)

  if(Object.keys(weather).length === 0){
    return (
      <h1>No Data</h1>
    )
  }
  else{
    return (
      <section className="bg-gray-100 w-10/12 lg:w-2/3 m-auto rounded-md shadow-md p-4 md:p-10">
        <h1 className="text-lg md:text-xl text-gray-700">
          Weather today in {location}
        </h1>
        <span className="flex items-center justify-between">
          <div className="mt-5">
            <h1 className="text-3xl md:text-5xl font-bold text-indigo-600">
              {celsiusScale ? weather.feelslike_c : weather.feelslike_f} &#176;
            </h1>
            <p className="font-bold">Feels Like</p>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <img src={sunrise} className="w-12 h-12 md:w-24 md:h-24" />
              <p className="text-xs text-gray-600">{astro ? astro.sunrise : '---'}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={sunset} className="w-12 h-12 md:w-24 md:h-24" />
              <p className="text-xs text-gray-600">{astro ? astro.sunset : '---'}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={moonrise} className="w-12 h-12 md:w-24 md:h-24" />
              <p className="text-xs text-gray-600">{astro ? astro.moonrise : '---'}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={moonset} className="w-12 h-12 md:w-24 md:h-24" />
              <p className="text-xs text-gray-600">{astro ? astro.moonset : '---'}</p>
            </div>
          </div>
        </span>
        {/* table showing weather stats */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-1 justify-center mt-10">
          <div className="flex items-center w-full border-2 border-blue-300">
            <img src={thermometer} className="w-12 h-12 bg-gray-500" />
            <div className="flex justify-between flex-grow px-4">
              <p>Gust</p>
              <p>{weather.gust_kph} kph</p>
            </div>
          </div>
          <div className="flex items-center w-full border-2 border-blue-300">
            <img src={humidity} className="w-12 h-12 bg-gray-500" />
            <div className="flex justify-between flex-grow px-4">
              <p>Humidity</p>
              <p>{weather.humidity}</p>
            </div>
          </div>
          <div className="flex items-center w-full border-2 border-blue-300">
            <img src={barometer} className="w-12 h-12 bg-gray-500" />
            <div className="flex justify-between flex-grow px-4">
              <p>Pressure</p>
              <p>{weather.pressure_mb} mb</p>
            </div>
          </div>
          <div className="flex items-center w-full border-2 border-blue-300">
            <img src={haze} className="w-12 h-12 bg-gray-500" />
            <div className="flex justify-between flex-grow px-4">
              <p>Visibility</p>
              <p>{weather.vis_km} km</p>
            </div>
          </div>
          <div className="flex items-center w-full border-2 border-blue-300">
            <img src={wind} className="w-12 h-12 bg-gray-500" />
            <div className="flex justify-between items-center flex-grow px-4">
              <p>Wind</p>
              <p className="flex items-center"><img src={windsock} className="w-9 h-9" /> {weather.wind_kph}kph<small className="text-xs italic text-indigo-600">({weather.wind_degree}&#176; {weather.wind_dir})</small></p>
            </div>
          </div>
          <div className="flex items-center w-full border-2 border-blue-300">
            <img src={dustwind} className="w-12 h-12 bg-gray-500" />
            <div className="flex justify-between flex-grow px-4">
              <p>Air Quality <small>(UK Defra standard)</small> </p>
              <p>{weather.air_quality["gb-defra-index"]}</p>
            </div>
          </div>
          <div className="flex items-center w-full border-2 border-blue-300">
            <img src={uvindex} className="w-12 h-12 bg-gray-500" />
            <div className="flex justify-between flex-grow px-4">
              <p>UV Index</p>
              <p>{weather.uv}</p>
            </div>
          </div>
          <div className="flex items-center w-full border-2 border-blue-300">
            <img src={raindrops} className="w-12 h-12 bg-gray-500" />
            <div className="flex justify-between flex-grow px-4">
              <p>Precipitation</p>
              <p>{weather.precip_mm}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
