import React from 'react'

export default function ForecastStats(props) {
    console.log(props.data)
    const forecast = props.data
    console.log("forecast: ", forecast)
    return (
        <>
            {
                forecast.map((element) => {
                    return (
                        <div className='bg-gray-400 mb-3'>
                            <h1 className='text-2xl font-bold'>{element.date}</h1>
                            <div className='flex w-full m-auto'>
                                <section>
                                    <p>Astro</p>
                                    <p>Moon Illumination: {element.astro.moon_illumination}</p>
                                    <p>Moon Phase: {element.astro.moon_phase}</p>
                                    <p>Moon Rise: {element.astro.moorise}</p>
                                    <p>Moon Set: {element.astro.moonset}</p>
                                    <p>Sun Rise: {element.astro.sunrise}</p>
                                    <p>Sun Set: {element.astro.sunset}</p>
                                </section>
                                <section>
                                    <p>Day</p>
                                    <p>Average Temp (C): {element.day.avgtemp_c}</p>
                                    <p>Average Temp (F): {element.day.avgtemp_f}</p>
                                    <p>Average Humidity: {element.day.avghumidity}</p>
                                    <p>Average Visibility(km): {element.day.avgvis_km}</p>
                                    <p>Average Visibility(m): {element.day.avgvis_miles}</p>
                                    <p>Condition: {element.day.condition.text}</p>
                                    <p>Max Temp (C): {element.day.maxtemp_c}</p>
                                    <p>Max Temp (F): {element.day.maxtemp_f}</p>
                                    <p>Min Temp (C): {element.day.mintemp_c}</p>
                                    <p>Min Temp (F): {element.day.mintemp_f}</p>
                                    <p>Max Wind Speed (kph): {element.day.maxwind_kph}</p>
                                    <p>Max Wind Speed (mph): {element.day.maxwind_mph}</p>
                                </section>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
