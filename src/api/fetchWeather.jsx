import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_Key = "2b1212672d7696f17856b10b40edb277"

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_Key
        }
    })
    return data
}