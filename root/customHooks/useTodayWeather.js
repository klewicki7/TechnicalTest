import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {dataToday, requestLocationPermission} from '../utils';
import useSWR from 'swr';

export const useTodayWeather = props => {
  const [todayWeather, setTodayWeather] = useState([]);
  const [position, setPosition] = useState({});
  const {data} = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=-34.4007&lon=-58.7744&appid=90037a8e8fc883c55bc52df88e7452dc`,
  );
  console.log(data);
  

  useEffect(() => {
    _getLocation();
  }, []);
  return {
    todayWeather,
    position,
  };
};
