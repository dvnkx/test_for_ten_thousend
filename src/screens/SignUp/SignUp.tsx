import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppColors} from '../../utils/colors';

import SignUpForm from './components/SignUpForm';
import UserSection from '../../components/UserSection';

const SignUp = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <UserSection title="Sign Up" subtitle="Personal Account" />
        <SignUpForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    backgroundColor: AppColors.lotion,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default SignUp;
