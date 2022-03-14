import React, { useState } from 'react'
import axios from 'axios'
import RealtimeStats from '../components/RealtimeStats'

export default function Realtime() {
    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState({})
    const apiKey = process.env.REACT_APP_API_KEY
    // console.log("api: ", apiKey)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
        console.log("data: ", response.data)
        setWeatherData(response.data)
    }

    return (
        <div className='p-5'>
            <section className='mb-5'>
                <h1 className='font-bold underline text-2xl'>What is Weat-React?</h1>
                <p>Current weather or realtime weather API method allows a user to get up to date current weather information in json and xml. The data is returned as a Current Object.</p>
                <br />
                <p>Current object contains current or realtime weather information for a given city.</p>
            </section>

            <form className="flex gap-5 w-1/3 m-auto mt-10 p-5 bg-gray-500" onSubmit={handleSubmit}>
                <div className="grow">
                    <input
                        type="text"
                        name='city'
                        placeholder='Enter a city...'
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
                JSON.stringify(weatherData) === '{}' ? 'Searching...' : <RealtimeStats data={weatherData} />
            }
        </div>
    )
}
