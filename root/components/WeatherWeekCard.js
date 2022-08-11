import {
  Center,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
  ScrollView,
  Icon,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {capitalize, groupDays, ICON_LIST} from '../utils';
import moment from 'moment';
import 'moment/locale/es';
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  EvilIcons,
  MaterialIcons,
} from '@native-base/icons';
moment.locale('es');

function WeatherWeekCard({data, filterData}) {
  const [weatherListWeek, setWeatherListWeek] = useState(
    groupDays(data.data.list),
  );
  useEffect(() => {
    console.log(data.data.list,'dale paa')
    if (filterData) {
      setWeatherListWeek(filterData.orderList);
    } else {
      setWeatherListWeek(groupDays(data.data.list));
    }
  }, [filterData, data]);

  return (
    <ScrollView
      maxH={'50%'}
      bg={'#008080'}
      rounded={'xl'}
      opacity={'0.7'}
      showsVerticalScrollIndicator={false}>
      <Center m={5} justifyContent={'center'} alignItems={'center'}>
        <VStack space={10} width={'90%'} justifyContent={'center'}>
          {Object.keys(weatherListWeek).map((e, k) => {
            return (
              <VStack key={k} justifyContent={'center'}>
                <Heading color={'white'} textAlign={'center'} pb={10}>
                  {capitalize(moment(e).format('dddd'))}
                </Heading>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <HStack
                    space={'15'}
                    justifyContent={'space-around'}
                    alignItems={'center'}>
                    {weatherListWeek[e].map((e, i) => {
                      return (
                        <VStack
                          width={16}
                          key={i}
                          space={7}
                          alignItems={'center'}>
                          <Text
                            textAlign={'center'}
                            fontSize={'lg'}
                            fontWeight={'bold'}
                            color={'white'}>
                            {moment(e.dt_txt).format('hh')}
                          </Text>
                          <Text textAlign={'center'} fontSize={15}>
                            <Icon color={'white'} size={7} as={Ionicons} name={ICON_LIST[e.weather[0].icon]} />
                            
                          </Text>
                          <Text color={'white'} textAlign={'center'} fontSize={15}>
                            {String(e.main.temp).slice(0,1)}º
                          </Text>
                        </VStack>
                      );
                    })}
                  </HStack>
                </ScrollView>
                <Divider mt={5} h={0.3} bg={'lightBlue.100'} />
              </VStack>
            );
          })}
        </VStack>
      </Center>
    </ScrollView>
  );
}

export default WeatherWeekCard;
