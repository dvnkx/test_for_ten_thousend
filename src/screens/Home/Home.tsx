import React, {useCallback} from 'react';
import {Alert, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slices/auth.slice';
import {Button} from '../../components';
import Keychain from 'react-native-keychain';
import {verify} from '../../redux/slices/verify.slice';

const Home = () => {
  const dispatch = useDispatch();
  // to cut handleLogout
  const handleLogout = useCallback(async () => {
    try {
      await Keychain.resetGenericPassword({service: 'userPin'});
      dispatch(verify());
      dispatch(logout());
    } catch (error) {
      console.error('Error deleting PIN:', error);
      Alert.alert('Error', 'Failed to delete the PIN. Please try again.');
    }
  }, [dispatch]);

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
};

export default Home;
