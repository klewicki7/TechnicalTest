import Toast from 'react-native-root-toast';
import {groupDays} from '../../utils';
import actions from '../actions';
import {
  LOAD_ALL_WEATHER_REQUEST,
  SET_LOCATION,
  SEARCH_CITY_REQUEST,
} from '../actions';

const weatherMiddleware =
  ({dispatch, getState}) =>
  next =>
  action => {
    next(action);
    switch (action.type) {
      case LOAD_ALL_WEATHER_REQUEST:
        const lat = action.lat || getState().weatherReducer.location.lat;
        const lon = action.lon || getState().weatherReducer.location.lon;
        const urls = [
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=90037a8e8fc883c55bc52df88e7452dc`,
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&days=5&lon=${lon}&units=metric&lang=es&appid=90037a8e8fc883c55bc52df88e7452dc`,
        ];
        Promise.all(urls.map(u => fetch(u)))
          .then(responses => Promise.all(responses.map(res => res.json())))
          .then(data => {
            dispatch(actions.loadAllWeatherResponse(data));
            dispatch(actions.loadPosition(lat, lon));
          });
        break;
      case SEARCH_CITY_REQUEST:
        let endp = [
          `https://api.openweathermap.org/data/2.5/forecast?q=${action.text}&lang=es&units=metric&appid=90037a8e8fc883c55bc52df88e7452dc`,
          `https://api.openweathermap.org/data/2.5/weather?q=${action.text}&lang=es&units=metric&appid=90037a8e8fc883c55bc52df88e7452dc`,
        ];
        if (action.text === '') {
          dispatch(actions.loadAllWeather());
          break;
        }
        Promise.all(endp.map(u => fetch(u)))
          .then(responses => Promise.all(responses.map(res => res.json())))
          .then(data => {
            if (data[0].cod != 404) {
              dispatch(
                actions.searchCityResponse({
                  cityData: data[1],
                  orderList: groupDays(data[0].list),
                }),
              );
            } else {
              Toast.show('No se encontraron resultados', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
            }
          });
        break;
    }
  };

export default weatherMiddleware;
