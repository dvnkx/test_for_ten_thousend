import React from 'react';
import {View} from 'react-native';

import SignUpForm from './components/SignUpForm';
import UserSection from '../../components/UserSection';
import {AppStyles} from '../../utils/styles';

const SignUp = () => {
  return (
    <View style={AppStyles.authWrapper}>
      <View style={AppStyles.authContainer}>
        <UserSection title="Sign Up" />
        <SignUpForm />
      </View>
    </View>
  );
};

export default SignUp;
