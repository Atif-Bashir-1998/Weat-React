import axios from 'axios'
import dayjs from 'dayjs'
const apiKey = process.env.REACT_APP_API_KEY
const today = dayjs().format('YYYY-MM-DD')

const getWeather = async (location) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&aqi=yes&days=3`)
        return {data: response.data}
    } catch (error) {
        return {error}
    }
}

const getAstronomy = async (location) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${location}&dt=${today}`)
        return {data: response.data}
    } catch (error) {
        return {error}
    }
}

const getSuggestion = async (query) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`)
        return {data: response.data}
    } catch (error) {
        return {error}
    }
}

const getLocationFromLatLong = async (coordinates) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${coordinates}`)
        return {data: response.data[0]}
    } catch (error) {
        return {error}
    }
}

export {getWeather, getAstronomy, getSuggestion, getLocationFromLatLong}