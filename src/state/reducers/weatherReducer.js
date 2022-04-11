const initialState = {
    location: "Attock City, Punjab, Pakistan"
}

const reducer = (state = initialState, { type, payload }) => {
  console.log("here")
  switch (type) {

  case "SET_LOCATION":
    return { ...state, location: payload }

  default:
    return state
  }
}

export default reducer;