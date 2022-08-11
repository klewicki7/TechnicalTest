/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Suspense} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Center, NativeBaseProvider, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from './root/navigation/index';
import HomeScreen from './root/screens/HomeScreen';
import store from './root/store';
import {SWRConfig} from 'swr';
import Lottie from 'lottie-react-native';
const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SWRConfig
          value={{
            fetcher: (...args) => fetch(...args).then(res => res.json()),
            suspense: true,
          }}>
          <NativeBaseProvider>
            <Suspense
              fallback={
                <Center height={'100%'} width={'100%'}>
                  <Lottie resizeMode='cover' source={require('./root/assets/lottieFiles/night.json')} autoPlay loop />
                </Center>
              }>
              <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="HomeScreen">
                {Object.entries(Screens).map(s => {
                  let name = s[0];
                  return (
                    <Stack.Screen
                      key={name}
                      name={name}
                      component={Screens[name]}
                    />
                  );
                })}
              </Stack.Navigator>
            </Suspense>
          </NativeBaseProvider>
        </SWRConfig>
      </NavigationContainer>
    </Provider>
  );
};
{
  /*  */
}

export default App;
