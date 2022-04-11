import React, { useState } from "react";
import bg from "./../images/night-clear.jpg";
import clearNight from "./../images/clear-night.svg"
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import Alert from './Alert'
import {getWeather} from "../api/WeatherAPI";

export default function HeroSection() {
	const location = useSelector((state) => state.weather.location)
	const weather = useSelector((state) => state.weather.weather)
	const dispatch = useDispatch()

	const [locationInput, setLocationInput] = useState('')
	const [showAlert, setShowAlert] = useState(false)
	const [alertMessage, setAlertMessage] = useState('')

	const {setLocation, setWeather} = bindActionCreators(actionCreators, dispatch)

	const updateLocation = async () => {
		if(locationInput){
			let {data, error} = await getWeather(locationInput)
			console.log("d/e",data, error)
			if(error){
				setAlertMessage(error.response.data.error.message)
				displayAlert()
			}
			else{
				let actualLocation = [data.location.name, data.location.region, data.location.country].join(', ')
				setLocation(actualLocation)
				setWeather(data.current)
				setLocationInput('')
			}
		}
		else{
			setAlertMessage('Enter a city in the input!')
			displayAlert()
		}
	}

	const displayAlert = () => {
		setShowAlert(true)
		setTimeout(() => setShowAlert(false), 2000)
	}

	return (
		<div
			className="h-96 p-10 text-white"
			style={{ background: `url(${bg})`, backgroundPositionY: "bottom" }}
		>
			{/* <img src={bg} /> */}
			<section className="flex flex-col">
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
					<div className="mb-3 xl:w-96">
						<div className="relative flex items-stretch w-full mb-4">
							<input type="search" className="form-control relative flex-auto w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" value={locationInput} onChange={(e) => setLocationInput(e.target.value)} />
							<button className="px-6 py-2 border-2 border-gray-600 text-white-600 bg-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-25 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3" onClick={updateLocation}>Search</button>
						</div>
					</div>
				</div>
			</section>

			{
				showAlert && <Alert>{alertMessage}</Alert>
			}
		</div>
	);
}
