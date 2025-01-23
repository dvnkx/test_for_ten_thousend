import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useCallback} from 'react';
import {Routes, RoutesType} from '../../utils/routes';
import {Image, StyleSheet} from 'react-native';
import {ASSETS} from '../../utils/assets';
import {Home, Portfolio, Search, Settings} from '../';
import {AssetIcons, AssetMap, GetIconProps} from '../../types/tabs.types';

const Tab = createBottomTabNavigator<RoutesType>();

const getIcon = (iconName: AssetIcons) => {
  return ({focused, size}: GetIconProps) => {
    const iconKey: keyof AssetMap = focused ? `${iconName}Focused` : iconName;
    return (
      <Image
        source={ASSETS[iconKey]}
        style={[styles.icon, {width: size, height: size}]}
      />
    );
  };
};

const Tabs = () => {
  const getScreenOptions = useCallback(
    (iconName: AssetIcons) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarIcon: getIcon(iconName),
    }),
    [],
  );

  return (
    <Tab.Navigator initialRouteName={Routes.HOME}>
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={getScreenOptions('home')}
      />
      <Tab.Screen
        name={Routes.PORTFOLIO}
        component={Portfolio}
        options={getScreenOptions('portfolio')}
      />
      <Tab.Screen
        name={Routes.SEARCH}
        component={Search}
        options={getScreenOptions('search')}
      />
      <Tab.Screen
        name={Routes.SETTINGS}
        component={Settings}
        options={getScreenOptions('settings')}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 20,
  },
});

export default Tabs;
