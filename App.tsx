import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {Routes, RoutesType} from './src/utils/routes';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './src/screens/SignUp/SignUp';
import Walkthrough from './src/screens/Walkthrough/Walkthrough';
import SignIn from './src/screens/SignIn/SignIn';
import PinCode from './src/screens/PinCode/PinCode';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/api/client';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

enableScreens();

const Stack = createStackNavigator<RoutesType>();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.WALKTHROUGH}>
              <Stack.Screen name={Routes.WALKTHROUGH} component={Walkthrough} />
              <Stack.Screen name={Routes.SIGNUP} component={SignUp} />
              <Stack.Screen name={Routes.SIGNIN} component={SignIn} />
              <Stack.Screen name={Routes.PINCODE} component={PinCode} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
