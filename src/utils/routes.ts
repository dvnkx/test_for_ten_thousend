import {StackNavigationProp} from '@react-navigation/stack';

export enum Routes {
  WALKTHROUGH = 'Walkthrough',
  SIGNUP = 'SignUp',
}

export type RoutesType = {
  Walkthrough: {name: string} | undefined;
  SignUp: {name: string} | undefined;
};

export type NavigationProps = StackNavigationProp<RoutesType>;
