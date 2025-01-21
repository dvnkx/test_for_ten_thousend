import React from 'react';
import {View} from 'react-native';

import UserSection from '../../components/UserSection';
import SignInForm from './components/SignInForm';
import {AppStyles} from '../../utils/styles';

const SignIn = () => {
  return (
    <View style={AppStyles.authWrapper}>
      <View style={AppStyles.authContainer}>
        <UserSection title="Login" />
        <SignInForm />
      </View>
    </View>
  );
};

export default SignIn;
