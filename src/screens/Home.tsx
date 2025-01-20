import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import {AppColors} from '../utils/colors';

const Home = () => {
  const navigation = useNavigation();

  const openSignUpModal = () => {
    // navigation.navigate('SignUpModal');
  };

  const openSignInModal = () => {
    // navigation.navigate('SignInModal');
  };

  return (
    <View style={styles.container}>
      <View style={styles.introduction}>
        <Text style={styles.title}>Welcome to Our App!</Text>
        <Text style={styles.description}>Some description about the app</Text>
      </View>

      <View style={styles.buttons}>
        <Button title="Sign Up" onPress={openSignUpModal} />
        <Button
          title="Sign In"
          onPress={openSignInModal}
          backgroundColor={AppColors.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  introduction: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 40,
  },
  buttons: {},
});

export default Home;
