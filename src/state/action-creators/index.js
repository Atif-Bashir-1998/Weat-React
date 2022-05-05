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

export const setForecast = (forecast) => {
    return {
        type: 'SET_FORECAST',
        payload: forecast
    }
}

export const setCelsiusScale = (isCelsiusScale) => {
    return {
        type: 'SET_CELSIUSSCALE',
        payload: isCelsiusScale
    }
}

export const setAstro = (astro) => {
    return {
        type: 'SET_ASTRO',
        payload: astro
    }
}

export const setRecent = (recent) => {
    return {
        type: 'SET_RECENT',
        payload: recent
    }
}

export const setOnline = (isOnline) => {
    return {
        type: 'SET_ONLINE',
        payload: isOnline
    }
}