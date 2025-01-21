import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, View} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {AppColors} from '../../../utils/colors';
import {Button, Input} from '../../../components';
import {signInSchema, signInValues} from '../../../schemas/signIn.schema';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, Routes} from '../../../utils/routes';
import {AppStyles} from '../../../utils/styles';
import axios from 'axios';

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
  } = useForm<signInValues>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  });

  const navigation = useNavigation<NavigationProps>();

  const navigateToSignUp = useCallback(() => {
    navigation.navigate(Routes.SIGNUP);
  }, [navigation]);

  const navigateToPinCode = useCallback(() => {
    navigation.navigate(Routes.PINCODE);
  }, [navigation]);

  const onSubmit = async (data: signInValues) => {
    try {
      const response = await axios.post('https://dummyjson.com/user/login', {
        username: data.username,
        password: data.password,
      });

      const {accessToken} = response.data;

      if (accessToken) {
        navigateToPinCode();
      } else {
        Alert.alert('Error', 'Login failed, please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred, please try again.');
    }
  };

  return (
    <View style={AppStyles.formContainer}>
      <Input
        label="Username"
        {...register('username')}
        onChangeText={text => setValue('username', text)}
        value={watch('username')}
        errorMessage={errors.username?.message}
        placeholder="Username..."
      />
      <Input
        label="Password"
        {...register('password')}
        onChangeText={text => setValue('password', text)}
        value={watch('password')}
        secureTextEntry
        errorMessage={errors.password?.message}
        placeholder="Password..."
      />
      <View style={[AppStyles.formButtons, {marginTop: 150, gap: 15}]}>
        <Button
          title="Continue"
          backgroundColor={AppColors.primary}
          onPress={handleSubmit(onSubmit)}
        />
        <Button title="Create Account" onPress={navigateToSignUp} />
      </View>
    </View>
  );
};

export default SignInForm;
