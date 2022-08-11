export const LOAD_ALL_WEATHER_REQUEST = 'LOAD_ALL_WEATHER_REQUEST';
export const LOAD_ALL_WEATHER_RESPONSE = 'LOAD_ALL_WEATHER_RESPONSE';
export const LOAD_ALL_WEATHER_ERROR = 'LOAD_ALL_WEATHER_ERROR';

export const SEARCH_CITY_REQUEST = 'SEARCH_CITY_REQUEST';
export const SEARCH_CITY_RESPONSE = 'SEARCH_CITY_RESPONSE';
export const SEARCH_CITY_ERROR = 'SEARCH_CITY_ERROR';

export const LOAD_POSITION = 'LOAD_POSITION';
export default {
  loadAllWeather: (lat, lon) => ({
    type: LOAD_ALL_WEATHER_REQUEST,
    lat,
    lon,
  }),
  loadAllWeatherResponse: res => ({
    type: LOAD_ALL_WEATHER_RESPONSE,
    res,
  }),
  loadPosition: (lat, lon) => ({
    type: LOAD_POSITION,
    lat,
    lon,
  }),
  searchCityRequest: text => ({
    type: SEARCH_CITY_REQUEST,
    text,
  }),
  searchCityResponse: data => ({
    type: SEARCH_CITY_RESPONSE,
    data,
  }),
};
