import {
  Box,
  Button,
  Center,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  SearchIcon,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState, useCallback} from 'react';
import {ImageBackground} from 'react-native';
import WeatherWeekCard from '../components/WeatherWeekCard';
import {dataToday, groupDays, requestLocationPermission} from '../utils';
import Geolocation from 'react-native-geolocation-service';
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  EvilIcons,
  MaterialIcons,
} from '@native-base/icons';

import debounce from 'lodash.debounce';
/* import {useTodayWeather} from '../customHooks/useTodayWeather'; */
import useSWR from 'swr';

function HomeScreen() {
  const [location, setLocation] = useState({});
  const [filterData, setFilterData] = useState(false);
  const [filterDataToday, setfilterDataToday] = useState([]);
  const [filterDataWeek, setfilterDataWeek] = useState([]);
  const {data} = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=-34.4007&lon=-58.7744&units=metric&appid=90037a8e8fc883c55bc52df88e7452dc`,
  );
  const dataSemanal = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?lat=-34.4007&days=5&lon=-58.7744&units=metric&lang=es&appid=90037a8e8fc883c55bc52df88e7452dc`,
  );

  useEffect(() => {
    _getLocation();
  }, []);

  const _getLocation = async () => {
    if (!(await requestLocationPermission())) return;
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      error => {
        console.log(error.code);
        error.code === 5
          ? [
              _getLocation(),
              utils.ToastShow(
                'You must accept location permissions to continue',
              ),
            ]
          : console.log('pasa');
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const filter = data => {
    setFilterData({
      cityData: data[1],
      orderList: groupDays(data[0].list),
    });
  };

  const debouncedFilter = useCallback(
    debounce(text => {
      if (text == '') {
        setFilterData(false);
        return;
      }
      let urls = [
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&q=${text}&lon=$${location.lon}&lang=es&units=metric&appid=90037a8e8fc883c55bc52df88e7452dc`,
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&lang=es&units=metric&appid=90037a8e8fc883c55bc52df88e7452dc`,
      ];
      Promise.all(urls.map(u => fetch(u)))
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(data => {
          filter(data);
        });
    }, 500),
    [],
  );
  const search = text => {
    debouncedFilter(text);
  };

  return (
    <ImageBackground
      h={'100%'}
      width={'100%'}
      source={{
        uri: 'https://images.pexels.com/photos/2908971/pexels-photo-2908971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      resizeMode={'cover'}>
      <Center h={'100%'} width={'100%'}>
        <Center width={'100%'} alignItems={'center'} justifyContent={'center'}>
          <VStack>
            <Center m={10}>
              {filterData ? (
                <Center>
                  <Text fontSize={'3xl'} color={'white'}>
                    {filterData.cityData?.name}
                  </Text>
                  <Text fontSize={'5xl'} color={'white'}>
                    {String(filterData.cityData.main.temp).slice(0, String(filterData.cityData.main.temp).length - 1) || ''}º
                  </Text>
                  <Text fontSize={'xl'} color={'white'}>
                    Humedad : {filterData.cityData?.main.humidity}
                  </Text>
                  <Text fontSize={'xl'} color={'white'}>
                    {filterData.cityData?.weather[0]?.description.toUpperCase()}
                  </Text>
                </Center>
              ) : (
                <Center>
                  <Text fontSize={'3xl'} color={'white'}>
                    {data?.name}
                  </Text>
                  <Text fontSize={'5xl'} color={'white'}>
                    {String(data.main.temp).slice(0, 3) || ''}º
                  </Text>
                  <Text fontSize={'xl'} color={'white'}>
                    Humedad : {data?.main.humidity}º
                  </Text>
                  <Text fontSize={'xl'} color={'white'}>
                    {data?.weather[0]?.description.toUpperCase()}
                  </Text>
                </Center>
              )}
            </Center>
            <Center mb={5}>
              <InputGroup>
                <InputLeftAddon
                  borderWidth={0}
                  opacity={'0.7'}
                  w={'12'}
                  bg={'#008080'}
                  children={<SearchIcon size={5} color={'white'} />}
                />
                <Input
                  borderColor={'#008080'}
                  placeholderTextColor={'#fafafa'}
                  color={'white'}
                  width={'65%'}
                  onChangeText={text => search(text)}
                  placeholder="Buscar ciudad"
                />
              </InputGroup>
            </Center>
            {<WeatherWeekCard data={dataSemanal} filterData={filterData} />}
          </VStack>
        </Center>
      </Center>
    </ImageBackground>
  );
}

export default HomeScreen;
