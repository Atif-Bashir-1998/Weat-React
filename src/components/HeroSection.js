import React, { useEffect, useState } from "react";
import clearNight from "./../images/clear-night.svg"
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import Alert from './Alert'
import {getWeather} from "../api/WeatherAPI";
import LocationSearch from "./LocationSearch";

export default function HeroSection() {
	const location = useSelector((state) => state.weather.location)
	const weather = useSelector((state) => state.weather.weather)
	const dispatch = useDispatch()

	const [locationInput, setLocationInput] = useState('')
	const [showAlert, setShowAlert] = useState(false)
	const [alertMessage, setAlertMessage] = useState('')

	const {setLocation, setWeather, setForecast} = bindActionCreators(actionCreators, dispatch)

	useEffect(() => {
		locationUpdated(location)
	}, [location])

	const locationUpdated = async (location) => {
		console.log("locationupdated: ", location)
		let {data, error} = await getWeather(location)
		if(error){
			setAlertMessage(error.response.data.error.message)
			displayAlert()
		}
		else{
			setLocation(location)
			setWeather(data.current)
			setForecast(data.forecast.forecastday)
			setLocationInput('')
		}
	}

	const displayAlert = () => {
		setShowAlert(true)
		setTimeout(() => setShowAlert(false), 2000)
	}

	const removeAlert = () => {
		setShowAlert(false)
	}

	return (
		<div
			className="h-96 p-10 text-white hero-section"
		>
			{/* <img src={bg} /> */}
			<section className="flex flex-col h-full">
				{/* weather summary section */}
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-7xl font-bold">{weather.temp_c} &#176;C <span className="text-gray-500 cursor-pointer">| F</span></h1>
						<h2 className="text-3xl italic text-gray-300 mt-4">{ location }</h2>
					</div>
					<img src={clearNight} className='w-24 h-24' />
				</div>
				{/* input box */}
				<div className="flex justify-center">
					<LocationSearch />
				</div>
				
			</section>

			{
				showAlert && <Alert removeAlert={removeAlert} message={alertMessage}></Alert>
			}
		</div>
	);
}
