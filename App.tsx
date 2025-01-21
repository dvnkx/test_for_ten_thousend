import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
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
import {Provider, useSelector} from 'react-redux';
import store, {persistor, RootState} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Home from './src/screens/Home/Home';
import * as Keychain from 'react-native-keychain';

enableScreens();

const Stack = createStackNavigator<RoutesType>();

const AuthStack = () => (
  <Stack.Navigator initialRouteName={Routes.WALKTHROUGH}>
    <Stack.Screen name={Routes.WALKTHROUGH} component={Walkthrough} />
    <Stack.Screen name={Routes.SIGNUP} component={SignUp} />
    <Stack.Screen name={Routes.SIGNIN} component={SignIn} />
    <Stack.Screen name={Routes.PINCODE} component={PinCode} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.HOME} component={Home} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [token]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
