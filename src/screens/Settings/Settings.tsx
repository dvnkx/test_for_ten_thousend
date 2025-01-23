import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenTitle} from '../../components';
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
import {useTranslation} from 'react-i18next';

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
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProps>();

  const navigateToLanguages = useCallback(() => {
    navigation.navigate(Routes.LANGUAGES);
  }, [navigation]);

  return (
    <SettingsItem onPress={navigateToLanguages}>
      <SettingsItem.Image source={ASSETS.language} />
      <SettingsItem.Text>{t('settings.languages')}</SettingsItem.Text>
      <SettingsItem.Chevron />
    </SettingsItem>
  );
};

const Logout = () => {
  const {t} = useTranslation();
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
      <SettingsItem.Text>{t('settings.logout')}</SettingsItem.Text>
      <SettingsItem.Chevron />
    </SettingsItem>
  );
};

const Settings = () => {
  const {t} = useTranslation();
  return (
    <View style={AppStyles.mainContainer}>
      <ScreenTitle title={t('settings.title')} />
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
