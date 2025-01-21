import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/screens/Home'; // Adjust as necessary

import {enableScreens} from 'react-native-screens';
import {Routes, RoutesType} from './src/utils/routes';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/screens/SignUp';

enableScreens();

const Stack = createStackNavigator<RoutesType>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME}>
        <Stack.Screen name={Routes.HOME} component={Home} />
        <Stack.Screen name={Routes.SIGNUP} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
