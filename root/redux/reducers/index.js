import {groupDays} from '../../utils';
import {
  LOAD_ALL_WEATHER_RESPONSE,
  LOAD_POSITION,
  SEARCH_CITY_RESPONSE,
} from '../actions';

const initialState = {
  weatherToday: false,
  weatherWeek: false,
  location: {
    lat: -34.4007,
    lon: -58.7744,
  },
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_WEATHER_RESPONSE:
      return {
        ...state,
        weatherToday: action.res[0],
        weatherWeek: groupDays(action.res[1].list),
      };
    case LOAD_POSITION:
      return {
        ...state,
        location: {lat: action.lat, lon: action.lon},
      };
    case SEARCH_CITY_RESPONSE:
      return {
        ...state,
        weatherToday: action.data.cityData,
        weatherWeek: action.data.orderList,
      };
    default:
      return state;
  }
};

export default weatherReducer;
