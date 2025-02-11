import React, {FC, ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {AppColors} from '../../../utils/colors';
import {AppStyles} from '../../../utils/styles';

type HomeBlockComponentProps = TouchableOpacityProps & {
  children: ReactNode;
  style?: ViewStyle;
};

const BlockContainerComponent: FC<HomeBlockComponentProps> = ({
  children,
  style,
  ...rest
}) => (
  <TouchableOpacity {...rest} style={[styles.taskContainer, style]}>
    {children}
  </TouchableOpacity>
);

const BlockComponents = {
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

export const BlockComponent = Object.assign(
  BlockContainerComponent,
  BlockComponents,
);

const styles = StyleSheet.create({
  taskContainer: {
    justifyContent: 'center',
    width: 200,
    height: 100,
    backgroundColor: AppColors.lotion,
    padding: 20,

    marginVertical: 10,
    borderRadius: 10,
  },
  goToCall: {
    marginTop: 10,
    color: AppColors.primary,
  },
});

export default BlockComponent;
