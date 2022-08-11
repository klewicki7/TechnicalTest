import {Center, Text} from 'native-base';
import React from 'react';

function WeatherTodayCard({data}) {
  return (
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
  );
}

export default WeatherTodayCard;
