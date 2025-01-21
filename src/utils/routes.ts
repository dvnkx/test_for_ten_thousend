import {StackNavigationProp} from '@react-navigation/stack';

export enum Routes {
  HOME = 'Home',
  SIGNUP = 'SignUp',
}

export type RoutesType = {
  Home: {name: string} | undefined;
  SignUp: {name: string} | undefined;
};

export type NavigationProps = StackNavigationProp<RoutesType>;
