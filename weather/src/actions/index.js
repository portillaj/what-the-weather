import axios from 'axios';
import { FETCH_WEATHER } from './types';

const API_KEY = 'ca0e3d655386674f95045c7b8d87c02b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}