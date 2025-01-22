import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppColors} from '../utils/colors';

type ScreenTitleProps = {
  title: string;
};

const ScreenTitle: FC<ScreenTitleProps> = ({title}) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: AppColors.dark_charcoal,
  },
});

export default ScreenTitle;
