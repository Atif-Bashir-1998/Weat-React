import React, { useState } from "react";
import clearNight from "./../images/clear-night.svg";
import fogNight from "./../images/hail.svg";
import hurricane from "./../images/hurricane.svg";
import humidity from "./../images/humidity.svg";
import { useSelector } from "react-redux";
// import Chart from "react-apexcharts";
import Graph from "./Graph";
import dayjs from "dayjs";
import WeatherList from "./WeatherList";


export default function HourlyForecast() {
  const forecast = useSelector((state) => state.weather.forecast);
  // let hourlyForecastCards = 5
  const [forecastDay, setForecastDay] = useState(0);
  let selectedForecast = forecast[forecastDay];
  const [showList, setShowList] = useState(false);


  if(Object.keys(forecast).length === 0){
    return (
      <h1>No Data</h1>
    )
  }
  else{
    return (
      <section className="bg-gray-100 w-10/12 lg:w-2/3 m-auto rounded-md shadow-md p-4 md:p-10">
        {/* <Modal /> */}
        <h1>Hourly Data</h1>
        <div className="mb-5">
          <button className="bg-blue-700 text-white px-6 py-2 rounded mr-3" onClick={() => setShowList(false)}>Graph</button>
          <button className="bg-blue-700 text-white px-6 py-2 rounded" onClick={() => setShowList(true)}>List</button>
        </div>
        <hr></hr>
        <button onClick={() => setForecastDay(0)} className="px-6 py-2 mr-3 border-2 border-gray-600 text-white-600 bg-indigo-600 font-medium text-white text-xs leading-tight rounded">{dayjs().format('DD-MM')}</button>
        <button onClick={() => setForecastDay(1)} className="px-6 py-2 mr-3 border-2 border-gray-600 text-white-600 bg-indigo-600 font-medium text-white text-xs leading-tight rounded">{dayjs().add(1, 'day').format('DD-MM')}</button>
        <button onClick={() => setForecastDay(2)} className="px-6 py-2 border-2 border-gray-600 text-white-600 bg-indigo-600 font-medium text-white text-xs leading-tight rounded">{dayjs().add(2, 'day').format('DD-MM')}</button>
        {
          showList && <WeatherList listData={selectedForecast.hour} />
        }
        {
          !showList && <Graph graphData={selectedForecast.hour} />
        }
      </section>
    )
  }

  return (
    <section className="bg-gray-100 w-10/12 md:w-2/3 m-auto rounded-md shadow-md p-4 md:p-10">
      <h1 className="text-xl">Hourly Forecast</h1>
      <Graph graphData={selectedForecast.hour} />
      {/* <Chart
        options={options}
        series={series}
        type="area"
      /> */}
      <div className="flex gap-5 flex-wrap justify-center">
        {/* {selectedForecast.hour.map((item) => {
          return <h1>{item.time}</h1>;
        })} */}
        {/* <article className="flex justify-between md:flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-2 md:px-4 py-4 md:py-8 rounded-md shadow-md">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Now</h1>
            <p className="text-3xl md:text-5xl font-bold text-indigo-600">
              24'
            </p>
          </div>
          <img
            src={clearNight}
            className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"
          />
          <span className="flex items-center">
            <img src={humidity} className="w-12 h-12" />
            <p>1%</p>
          </span>
        </article>
        <article className="flex justify-between md:flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-2 md:px-4 py-4 md:py-8 rounded-md shadow-md">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Now</h1>
            <p className="text-3xl md:text-5xl font-bold text-indigo-600">
              24'
            </p>
          </div>
          <img
            src={clearNight}
            className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"
          />
          <span className="flex items-center">
            <img src={humidity} className="w-12 h-12" />
            <p>1%</p>
          </span>
        </article>
        <article className="flex justify-between md:flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-2 md:px-4 py-4 md:py-8 rounded-md shadow-md">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Now</h1>
            <p className="text-3xl md:text-5xl font-bold text-indigo-600">
              24'
            </p>
          </div>
          <img
            src={clearNight}
            className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"
          />
          <span className="flex items-center">
            <img src={humidity} className="w-12 h-12" />
            <p>1%</p>
          </span>
        </article>
        <article className="flex justify-between md:flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-2 md:px-4 py-4 md:py-8 rounded-md shadow-md">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Now</h1>
            <p className="text-3xl md:text-5xl font-bold text-indigo-600">
              24'
            </p>
          </div>
          <img
            src={clearNight}
            className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"
          />
          <span className="flex items-center">
            <img src={humidity} className="w-12 h-12" />
            <p>1%</p>
          </span>
        </article>
        <article className="flex justify-between md:flex-col items-center w-full md:w-48 bg-gray-300 text-gray-700 border border-gray-300 px-2 md:px-4 py-4 md:py-8 rounded-md shadow-md">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Now</h1>
            <p className="text-3xl md:text-5xl font-bold text-indigo-600">
              24'
            </p>
          </div>
          <img
            src={clearNight}
            className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-700"
          />
          <span className="flex items-center">
            <img src={humidity} className="w-12 h-12" />
            <p>1%</p>
          </span>
        </article> */}
      </div>
      <button className="btn px-8 py-3 bg-blue-800 text-gray-300 rounded-full hover:bg-blue-600 transition duration-100 mt-10">
        Next 48 hours
      </button>
    </section>
  );
}
