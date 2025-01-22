import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '../types/tabs.types';

export enum Routes {
  // Auth | Verify
  WALKTHROUGH = 'Walkthrough',
  SIGNUP = 'SignUp',
  SIGNIN = 'SignIn',
  PINCODE = 'PinCode',

  // Tab
  TABS = 'Tabs',

  // Main
  HOME = 'Home',
  PORTFOLIO = 'Portfolio',
  SEARCH = 'Search',
  SETTINGS = 'Settings',

  //Settings
  LANGUAGES = 'Languages',
}

export type RoutesType = {
  Walkthrough: {name: string} | undefined;
  SignUp: {name: string} | undefined;
  SignIn: {name: string} | undefined;
  PinCode: {name: string} | undefined;

  Tabs: NavigatorScreenParams<BottomTabParamList>;

  Home: {name: string} | undefined;
  Portfolio: {name: string} | undefined;
  Search: {name: string} | undefined;
  Settings: {name: string} | undefined;

  Languages: {name: string} | undefined;
};

export type NavigationProps = StackNavigationProp<RoutesType>;
