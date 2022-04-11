import weatherReducer from "./weatherReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    weather: weatherReducer
})

export default reducers