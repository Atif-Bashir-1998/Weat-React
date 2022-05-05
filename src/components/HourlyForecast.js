import React, { useState } from "react";
import { useSelector } from "react-redux";
import Graph from "./Graph";
import dayjs from "dayjs";
import WeatherList from "./WeatherList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLineChart, faList } from '@fortawesome/free-solid-svg-icons'
import NoData from "./NoData";

export default function HourlyForecast() {
  const forecast = useSelector((state) => state.weather.forecast);
  const [forecastDay, setForecastDay] = useState(0);
  let selectedForecast = forecast[forecastDay];
  const [showList, setShowList] = useState(false);


  if(Object.keys(forecast).length === 0){
    return (
      <NoData />
    )
  }
  else{
    return (
      <section className="bg-gray-100 w-10/12 lg:w-2/3 m-auto rounded-md shadow-md p-4 md:p-10">
        {/* <Modal /> */}
        <h1>Hourly Data</h1>
        <div className="mb-5">
          <FontAwesomeIcon className="bg-purple-700 text-white px-3 md:px-6 py-1 md:py-2 rounded cursor-pointer mr-3" onClick={() => setShowList(false)} icon={faLineChart} />
          <FontAwesomeIcon className="bg-purple-700 text-white px-3 md:px-6 py-1 md:py-2 rounded cursor-pointer" onClick={() => setShowList(true)} icon={faList} />
        </div>
        <hr></hr>
        <button onClick={() => setForecastDay(0)} className="px-3 md:px-6 py-1 md:py-2 mr-3 border-gray-600 text-white-600 bg-purple-600 font-medium text-white text-xs leading-tight rounded">{dayjs().format('DD-MM')}</button>
        <button onClick={() => setForecastDay(1)} className="px-3 md:px-6 py-1 md:py-2 mr-3 border-gray-600 text-white-600 bg-purple-600 font-medium text-white text-xs leading-tight rounded">{dayjs().add(1, 'day').format('DD-MM')}</button>
        <button onClick={() => setForecastDay(2)} className="px-3 md:px-6 py-1 md:py-2 border-gray-600 text-white-600 bg-purple-600 font-medium text-white text-xs leading-tight rounded">{dayjs().add(2, 'day').format('DD-MM')}</button>
        {
          showList && <WeatherList listData={selectedForecast.hour} />
        }
        {
          !showList && <Graph graphData={selectedForecast.hour} />
        }
      </section>
    )
  }
}
