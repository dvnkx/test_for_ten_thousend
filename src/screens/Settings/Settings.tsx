import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import SettingsItem from './components/SettingsItem';
import {ASSETS} from '../../utils/assets';
import SettingsChevron from './components/SettingsChevron';

const Settings = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Settings" />
      <SettingsItem>
        <Image style={{width: 24, height: 24}} source={ASSETS.portfolio} />
      </SettingsItem>
      <SettingsItem>
        <SettingsChevron />
        <Image style={{width: 24, height: 24}} source={ASSETS.portfolio} />
      </SettingsItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default Settings;
