import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function SuggestionList({ suggestions, toggleSuggestionList }) {
	const dispatch = useDispatch()

  const {setLocation, setRecent} = bindActionCreators(actionCreators, dispatch)
  const locationUpdated = (item) => {
    let location  = [item.name, item.region, item.country].join(', ')
    setLocation(location)
    saveToRecent(location)
    toggleSuggestionList()
  }

  const saveToRecent = (location) => {
    let recent = JSON.parse(localStorage.getItem('recent')) === null ? [] : JSON.parse(localStorage.getItem('recent'))
    recent.unshift(location)
    let recentHistory = recent.splice(0,3)
    setRecent(recentHistory)
    localStorage.setItem('recent', JSON.stringify(recentHistory))
  }

  return (
    <section className="bg-gray-600 rounded-b-md space-y-2">
      {suggestions.map((item) => (
        <p className="bg-gray-400 px-3 py-1 hover:font-bold cursor-pointer italic font-thin" key={item.id} onClick={() => locationUpdated(item)}>
          {item.name}, {item.region}, {item.country}
        </p>
      ))}
    </section>
  );
}

export default SuggestionList;
