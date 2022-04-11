import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY

const getWeather = async (location) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`)
        return {data: response.data}
    } catch (error) {
        return {error}
    }
}

export default getWeather