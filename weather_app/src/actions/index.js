import axios from 'axios';
const API_KEY = 'e781d4e8953769123572bb62439605b7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ua`;
    const request = axios.get(url);

    return {type: FETCH_WEATHER, payload: request}
}