import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {Routes, RoutesType} from './src/utils/routes';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './src/api/client';
import {Provider, useSelector} from 'react-redux';
import store, {persistor, RootState} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Loader} from './src/components';
import {
  Languages,
  PinCode,
  SignIn,
  SignUp,
  Tabs,
  Walkthrough,
} from './src/screens';

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
    <Stack.Screen name={Routes.TABS} component={Tabs} />
    <Stack.Screen name={Routes.LANGUAGES} component={Languages} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const {token} = useSelector((state: RootState) => state.auth);
  const verifyStatus = useSelector(
    (state: RootState) => state.verify.verifyStatus,
  );

  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    setIsAuth(!!token);
    setIsVerified(verifyStatus);
  }, [token, verifyStatus]);

  return (
    <NavigationContainer>
      {isAuth ? (
        isVerified ? (
          <MainStack />
        ) : (
          <Stack.Navigator>
            <Stack.Screen name={Routes.PINCODE} component={PinCode} />
          </Stack.Navigator>
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
