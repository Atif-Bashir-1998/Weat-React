const initialState = {
  location: localStorage.getItem('location') || "",
  weather: {},
  forecast: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOCATION":
      localStorage.setItem('location', payload)
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
