import axios from 'axios'
import dayjs from 'dayjs'
const apiKey = process.env.REACT_APP_API_KEY
const today = dayjs().format('YYYY-MM-DD')

const getWeather = async (location) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`)
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

export {getWeather, getAstronomy}