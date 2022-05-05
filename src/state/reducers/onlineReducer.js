const initialState = {
  online: window.navigator.onLine,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ONLINE":
      return { ...state, online: payload };

    default:
      return state;
  }
};

export default reducer;
