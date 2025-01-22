import React, {FC, ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {AppColors} from '../utils/colors';

type ScreenHeaderProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const ScreenHeader: FC<ScreenHeaderProps> = ({children, style}) => {
  return <View style={[styles.headerContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    backgroundColor: AppColors.chinese_silver,
    color: AppColors.dark_charcoal,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
});

export default ScreenHeader;
