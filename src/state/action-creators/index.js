// export const setLocation = (location) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'SET_LOCATION',
//             payload: location
//         })
//     }
// }

export const setLocation = (location) => {
    return {
        type: 'SET_LOCATION',
        payload: location
    }
}

export const setWeather = (weather) => {
    return {
        type: 'SET_WEATHER',
        payload: weather
    }
}