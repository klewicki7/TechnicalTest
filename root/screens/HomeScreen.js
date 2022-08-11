import {Center, VStack} from 'native-base';
import React, {useEffect, useCallback} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import WeatherWeekCard from '../components/WeatherWeekCard';
import {requestLocationPermission} from '../utils';
import debounce from 'lodash.debounce';
import {useSelector} from 'react-redux';
import Lottie from 'lottie-react-native';
import Geolocation from 'react-native-geolocation-service';
import WeatherTodayCard from '../components/WeatherTodayCard';
import InputSearch from '../components/InputSearch';
const imageBg = {
  uri: 'https://images.pexels.com/photos/2908971/pexels-photo-2908971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

function HomeScreen(props) {
  const state = useSelector(s => s.weatherReducer);

  const _getLocation = async () => {
    if (!(await requestLocationPermission())) return;
    Geolocation.getCurrentPosition(
      position => {
        props.loadAllWeather(
          position.coords.latitude,
          position.coords.longitude,
        );
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

  useEffect(() => {
    _getLocation();
  }, []);

  const debouncedFilter = useCallback(
    debounce(text => {
      props.searchCityRequest(text);
    }, 700),
    [],
  );
  const search = text => {
    debouncedFilter(text);
  };

  function isLoading() {
    if (state.weatherToday)
      return <WeatherTodayCard data={state.weatherToday} />;
    else {
      return (
        <Center height={'100%'} width={'100%'}>
          <Lottie
            resizeMode="cover"
            source={require('../assets/lottieFiles/night.json')}
            autoPlay
            loop
          />
        </Center>
      );
    }
  }

  return (
    <ImageBackground style={styles.imgBg} source={imageBg} resizeMode={'cover'}>
      <Center style={styles.centerContainer}>
        <VStack>
          <Center m={10}>{isLoading()}</Center>
          <InputSearch search={text => search(text)} />
          <WeatherWeekCard
            data={state.weatherWeek}
            filterData={state.weatherFilter}
          />
        </VStack>
      </Center>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  imgBg: {
    h: '100%',
    width: '100%',
  },
  centerContainer: {
    height: '100%',
    width: '100%',
  },
});

export default HomeScreen;
