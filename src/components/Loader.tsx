import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {AppColors} from '../utils/colors';

const Loader = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color={AppColors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '22%',
    left: '50%',
  },
});

export default Loader;
