import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {ASSETS} from '../../../utils/assets';

const SettingsChevron = () => {
  return <Image style={styles.chevron} source={ASSETS.chevronRight} />;
};

const styles = StyleSheet.create({
  chevron: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: '60%',
    right: '5%',
  },
});

export default SettingsChevron;
