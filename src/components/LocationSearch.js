import React, { useEffect, useState } from "react"
import {getSuggestion} from "./../api/WeatherAPI"
import SuggestionList from "./SuggestionList"

function LocationSearch() {
	const [location, setLocation] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const noOfSuggestions = 3

  useEffect(async () => {
    if (location.length > 2){
			let response = await getSuggestion(location)
      setSuggestions(response.data.slice(0, noOfSuggestions))
		}
    else{
      setSuggestions([])
    }
  }, [location])

  return (
    <div className="mb-3 xl:w-96">
      <div className="relative flex items-stretch w-full">
        <input
          type="search"
          className="form-control relative flex-auto w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded-t-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <SuggestionList suggestions={suggestions} toggleSuggestionList={() => setSuggestions([])} />
    </div>
  );
}

export default LocationSearch;
