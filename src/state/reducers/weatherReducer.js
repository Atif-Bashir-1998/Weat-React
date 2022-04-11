const initialState = {
    location: "Attock City, Punjab, Pakistan",
    weather: {}
}

const reducer = (state = initialState, { type, payload }) => {
  console.log("here")
  switch (type) {

  case "SET_LOCATION":
    return { ...state, location: payload }

  case "SET_WEATHER":
    return {...state, weather: payload}

  default:
    return state
  }
}

export default reducer;