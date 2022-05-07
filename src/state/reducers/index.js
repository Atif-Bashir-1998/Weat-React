import weatherReducer from "./weatherReducer";
import onlineReducer from "./onlineReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    weather: weatherReducer,
    online: onlineReducer
})

export default reducers