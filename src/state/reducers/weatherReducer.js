const initialState = {
  location: localStorage.getItem('location') || "",
  weather: {},
  forecast: {},
  celsiusScale: true,
  recent: JSON.parse(localStorage.getItem('recent')) || []
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

    case "SET_CELSIUSSCALE":
      return {...state, celsiusScale: payload};

    case "SET_ASTRO":
      return {...state, astro: payload};

    case "SET_RECENT":
      return {...state, recent: payload}

    default:
      return state;
  }
};

export default reducer;
