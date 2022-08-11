import {Box, Divider, HStack, Text, VStack} from 'native-base';
import React, {useEffect} from 'react';

function WeatherTodayCard({location}) {
  /*   const [infoWeather, setInfoWeather] = useState([]) */

  /* useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=90037a8e8fc883c55bc52df88e7452dc`)
            .then(data => data.json()).then(data => setInfoWeather({
                weather: data.weather,
                weatherDetailInfo: data.main,
                country: data.sys
            }))
    }, [location]) */

  return (
    <VStack>
      <VStack rounded={'lg'} bg={'lightBlue.400'}>
        <Box>
          <Text>Sunny conditions will continue ....</Text>
        </Box>
        <Divider />
        <HStack h={'20'} alignItems={'center'} justifyContent={'space-around'}>
          <VStack>
            <Text>Now</Text>
            <Text>Soleado icon</Text>
            <Text>14''</Text>
          </VStack>
          <VStack>
            <Text>Now</Text>
            <Text>Soleado icon</Text>
            <Text>14''</Text>
          </VStack>
          <VStack>
            <Text>Now</Text>
            <Text>Soleado icon</Text>
            <Text>14''</Text>
          </VStack>
          <VStack>
            <Text>Now</Text>
            <Text>Soleado icon</Text>
            <Text>14''</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default WeatherTodayCard;
