import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import SettingsItem from './components/SettingsItem';
import {ASSETS} from '../../utils/assets';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, Routes} from '../../utils/routes';
import Keychain from 'react-native-keychain';
import {logout} from '../../redux/slices/auth.slice';
import {verify} from '../../redux/slices/verify.slice';
import {AppStyles} from '../../utils/styles';

const User = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return;
  }

  const {image, firstName, lastName} = user;

  return (
    <SettingsItem disabled>
      <SettingsItem.Image style={styles.userAvatar} src={image} />
      <SettingsItem.Text>{firstName + ' ' + lastName}</SettingsItem.Text>
    </SettingsItem>
  );
};

const Languages = () => {
  const navigation = useNavigation<NavigationProps>();

  const navigateToLanguages = useCallback(() => {
    navigation.navigate(Routes.LANGUAGES);
  }, [navigation]);

  return (
    <SettingsItem onPress={navigateToLanguages}>
      <SettingsItem.Image source={ASSETS.language} />
      <SettingsItem.Text>Languages</SettingsItem.Text>
      <SettingsItem.Chevron />
    </SettingsItem>
  );
};

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    try {
      await Keychain.resetGenericPassword({service: 'userPin'});
      dispatch(verify());
      dispatch(logout());
    } catch (error) {
      console.error('Error deleting PIN:', error);
    }
  }, [dispatch]);

  return (
    <SettingsItem onPress={handleLogout}>
      <SettingsItem.Image source={ASSETS.logout} />
      <SettingsItem.Text>Logout</SettingsItem.Text>
      <SettingsItem.Chevron />
    </SettingsItem>
  );
};

const Settings = () => {
  return (
    <View style={AppStyles.mainContainer}>
      <ScreenHeader title="Settings" />
      <User />
      <Languages />
      <Logout />
    </View>
  );
};

const styles = StyleSheet.create({
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default Settings;
