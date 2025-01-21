import {StackNavigationProp} from '@react-navigation/stack';

export enum Routes {
  WALKTHROUGH = 'Walkthrough',
  SIGNUP = 'SignUp',
  SIGNIN = 'SignIn',
  PINCODE = 'PinCode',

  HOME = 'Home',
}

export type RoutesType = {
  Walkthrough: {name: string} | undefined;
  SignUp: {name: string} | undefined;
  SignIn: {name: string} | undefined;
  PinCode: {name: string} | undefined;
  Home: {name: string} | undefined;
};

export type NavigationProps = StackNavigationProp<RoutesType>;
