import React, {ReactNode} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppColors} from '../../../utils/colors';
import {ASSETS} from '../../../utils/assets';

type SettingsItemProps = {
  children: ReactNode;
};

const SettingsItem = ({children}: SettingsItemProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 15,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: AppColors.chinese_silver,
  },
});

export default SettingsItem;
