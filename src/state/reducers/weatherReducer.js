const initialState = {
  location: localStorage.getItem('location') || "Attock City, Punjab, Pakistan",
  weather: {},
  forecast: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOCATION":
      return { ...state, location: payload };

    case "SET_WEATHER":
      return { ...state, weather: payload };

    case "SET_FORECAST":
      return { ...state, forecast: payload };

    default:
      return state;
  }
};

export default reducer;
