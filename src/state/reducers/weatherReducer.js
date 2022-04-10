const initialState = {
    location: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "SET_LOCATION":
    return { ...state, location: payload }

  default:
    return state
  }
}
