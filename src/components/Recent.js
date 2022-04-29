import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { v4 as uuidv4 } from 'uuid';

function Recent() {
  const dispatch = useDispatch();

  const { setLocation, setRecent } = bindActionCreators(
    actionCreators,
    dispatch
  );

	const recent = useSelector((state) => state.weather.recent);

	const clearHistory = () => {
		let history = []
		setRecent(history)
		localStorage.setItem('recent', JSON.stringify(history))
	}

  return (
    <div className="bg-gray-100 w-10/12 lg:w-2/3 m-auto rounded-md shadow-md p-4 md:p-10 my-10">
			<div className="flex items-center justify-between">
				<h1>Recent Locations</h1>
				<button className="px-2 py-1 bg-orange-300 text-xs rounded" onClick={() => clearHistory()}>clear all</button>
			</div>
			<br />
      {
				recent.map((item) => <span className="text-indigo-800 mr-5 cursor-pointer hover:underline" key={uuidv4()} onClick={() => setLocation(item)}>{item}</span>)
			}
    </div>
  );
}

export default Recent;
