import React, {FC, ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {AppColors} from '../../../utils/colors';
import {AppStyles} from '../../../utils/styles';

type HomeBlockComponentProps = TouchableOpacityProps & {
  children: ReactNode;
  style?: ViewStyle;
};

const HomeBlockComponent: FC<HomeBlockComponentProps> = ({
  children,
  style,
  ...rest
}) => (
  <TouchableOpacity {...rest} style={[styles.taskContainer, style]}>
    {children}
  </TouchableOpacity>
);

const HomeItemComponents = {
  Title: ({children}: {children: ReactNode}) => (
    <Text numberOfLines={1} ellipsizeMode="tail" style={AppStyles.title}>
      {children}
    </Text>
  ),
  SubTitle: ({children}: {children: ReactNode}) => (
    <Text numberOfLines={2} ellipsizeMode="tail" style={AppStyles.subtitle}>
      {children}
    </Text>
  ),
  Button: ({children, style}: {children: ReactNode; style?: TextStyle}) => (
    <TouchableOpacity>
      <Text style={[AppStyles.title, styles.goToCall, style]}>{children}</Text>
    </TouchableOpacity>
  ),
};

export const HomeComponent = Object.assign(
  HomeBlockComponent,
  HomeItemComponents,
);

const styles = StyleSheet.create({
  taskContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: AppColors.lotion,
    padding: 20,

    marginVertical: 10,
    borderRadius: 10,
    shadowColor: AppColors.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  goToCall: {
    marginTop: 10,
    color: AppColors.primary,
  },
});

export default HomeComponent;
