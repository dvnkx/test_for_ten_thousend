import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home'; // Adjust as necessary

import {enableScreens} from 'react-native-screens';
import {Routes} from './src/utils/routes';
enableScreens();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME}>
        <Stack.Screen name={Routes.HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
