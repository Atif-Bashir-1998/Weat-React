import React, { useEffect, useState } from "react";
import clearNight from "./../images/clear-night.svg";
import clearDay from "./../images/clear-day.svg";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import Alert from "./Alert";
import { getWeather, getLocationFromLatLong } from "../api/WeatherAPI";
import LocationSearch from "./LocationSearch";

export default function HeroSection() {
  const location = useSelector((state) => state.weather.location);
  const weather = useSelector((state) => state.weather.weather);
  const celsiusScale = useSelector((state) => state.weather.celsiusScale);
  const isOnline = useSelector((state) => state.online.online);
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const { setLocation, setWeather, setForecast, setCelsiusScale, setAstro, setOnline } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const getLatLong = () => {
    async function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coordinates = [latitude, longitude].join(",");
			let locationInfo = await getLocationFromLatLong(coordinates)
			const actualLocation = [locationInfo.data.name, locationInfo.data.region, locationInfo.data.country].join(', ')
			setLocation(actualLocation)
      // locationUpdated(latLong);
    }

    function error() {
      setAlertMessage("Unable to retrieve your location.");
    }

    if (!navigator.geolocation) {
      setAlertMessage("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  useEffect(() => {
    if (location) {
      locationUpdated();
    }
  }, [location]);

  useEffect(() => {
    if(!isOnline){
      setAlertMessage('You are currently offline.');
      displayAlert();
    }
    else{
      locationUpdated();
    }
  }, [isOnline])

  // pooling to check for internet connection
  setInterval(() => {
    if(window.navigator.onLine != isOnline){
      setOnline(window.navigator.onLine)
    }
  }, 1000)

  const locationUpdated = async () => {
    let { data, error } = await getWeather(location);
    if (error) {
      setAlertMessage(error.response.data.error.message);
      displayAlert();
    } else {
      setWeather(data.current);
      setForecast(data.forecast.forecastday);
      setAstro(data.forecast.forecastday[0].astro)
    }
  };

  const displayAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const removeAlert = () => {
    setShowAlert(false);
  };

  const toggleCelsiusScale = () => {
    setCelsiusScale(!celsiusScale)
  }

	if(!location){
		getLatLong()
	}

  return (
    <div className={`h-80 md:h-96 p-10 text-white ${weather.is_day ? 'day' : 'night'}`}>
      {/* <img src={bg} /> */}
      <section className="flex flex-col h-full">
        {/* weather summary section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-7xl font-bold flex md:space-x-4">
              <span>{celsiusScale ? weather.temp_c : weather.temp_f} &#176;</span>
              <div className="text-gray-500 cursor-pointer">
                <span className={celsiusScale ? 'text-white' : ''} onClick={() => toggleCelsiusScale()}>C{" "}</span>
                <span>| </span>
                <span className={!celsiusScale ? 'text-white' : ''} onClick={() => toggleCelsiusScale()}>F</span>
              </div>
            </h1>
            <h2 className="md:text-3xl italic text-gray-300 mt-4">{location}</h2>
          </div>
          <img
            src={weather.is_day ? clearDay : clearNight}
            className="w-12 md:w-24 h-12 md:h-24"
          />
        </div>
        {/* input box */}
        <div className="flex justify-center">
          {
            isOnline && <LocationSearch />
          }
        </div>
      </section>

      {showAlert && (
        <Alert removeAlert={removeAlert} message={alertMessage}></Alert>
      )}
    </div>
  );
}
