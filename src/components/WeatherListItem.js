import React, { useState } from 'react'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

function WeatherListItem({data}) {
  const celsiusScale = useSelector((state) => state.weather.celsiusScale);

  const [isOpen, setIsOpen] = useState(false)
  const toggleListDetail = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <article className='flex items-center justify-between px-4 mt-3 bg-gray-200 cursor-pointer rounded-t-lg' onClick={toggleListDetail}>
        {/* <p>Time: {dayjs.unix(data.time_epoch).format('HH:mm DD-MM-YYYY')}</p> */}
        <p className='text-xs flex-1'>{dayjs(data.time).format('h a')}</p>
        <p className='font-bold flex-1'>{celsiusScale ? data.temp_c : data.temp_f} &#176;</p>
        {/* <p>Temp feels: {data.feelslike_c}</p> */}
        <p className='flex items-center flex-1'>
          <img src={data.condition.icon}></img>
          {data.condition.text}</p>
        <p className='flex-1'>{data.wind_degree}&#176; {data.wind_dir} {data.wind_kph}km/h</p>
        <p>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </p>
      </article>
      {
        isOpen && <div className='flex flex-wrap justify-between p-4 bg-gray-300 rounded-b-lg'>
          <p>Humidity: {data.humidity}</p>
          <p>cloud coverage: {data.cloud}</p>
          <p>UV index: {data.uv}</p>
          <p>Visibility: {data.vis_km} km</p>
          <p>Dew point: {data.dewpoint_c} &#176;</p>
        </div>
      }
    </>
  )
}

export default WeatherListItem