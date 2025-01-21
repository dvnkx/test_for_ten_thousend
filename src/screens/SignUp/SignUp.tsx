import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../utils/colors';

import {ASSETS} from '../../utils/assets';
import SignUpForm from './components/SignUpForm';

const UserSection = () => {
  return (
    <TouchableOpacity style={styles.user}>
      <View>
        <View style={styles.avatar}>
          <Image style={styles.avatarEmoji} source={ASSETS.addAvatar} />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Personal Account</Text>
      </View>
    </TouchableOpacity>
  );
};

const SignUp = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <UserSection />
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
  user: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.chinese_silver,
  },
  avatar: {
    backgroundColor: 'rgba(136, 231, 136, 0.3)',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
    marginLeft: 16,
  },
  avatarEmoji: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppColors.dark_charcoal,
  },
  subtitle: {
    fontSize: 15,
    color: AppColors.granite_gray,
    marginTop: 4,
  },
});

export default SignUp;
