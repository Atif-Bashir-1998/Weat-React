import React from 'react'

export default function RealtimeStats(props) {
  const { location } = { ...props.data }
  const { current } = { ...props.data }
  return (
    <div className='flex flex-col w-1/3 m-auto mt-10 justify-between p-5 gap-5'>
      <section className='flex flex-wrap gap-5'>
        <p>Country: {location.country}</p>
        <p>Local time: {location.localtime}</p>
        <p>Timezone: {location.tz_id}</p>
        <p>Name: {location.name}</p>
        <p>Region: {location.region}</p>
      </section>
      <hr />
      <article className='flex flex-wrap gap-5'>
        <p>Temp (C): {current.temp_c}</p>
        <p>Temp (F): {current.temp_f}</p>
        <p>Feels Like (C): {current.feelslike_c}</p>
        <p>Feels Like (F): {current.feelslike_f}</p>
        <p>Weather: {current.condition.text}</p>
        <p>Wind: {current.wind_kph} kph ({current.wind_dir})</p>
        <p>Visibility: {current.vis_km} km</p>
        <p>Pressure: {current.pressure_in}</p>
        <p>Precipitation: {current.precip_in}</p>
        <p>Humidity: {current.humidity}</p>
        <p>Time of Day: {current.is_day ? 'Day' : 'Night'}</p>
      </article>
    </div>
  )
}
