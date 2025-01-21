import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpValues} from '../../../schemas/signUp.schema';
import {AppColors} from '../../../utils/colors';
import {Button, Input} from '../../../components';
import {signInSchema} from '../../../schemas/signIn.schema';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, Routes} from '../../../utils/routes';
import {AppStyles} from '../../../utils/styles';

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
  } = useForm<signUpValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema),
  });

  const navigation = useNavigation<NavigationProps>();

  const navigateToSignUp = useCallback(() => {
    navigation.navigate(Routes.SIGNUP);
  }, [navigation]);

  const onSubmit = (data: signUpValues) => {
    console.log(` Email: ${data.email} Password: ${data.password}`);
  };

  return (
    <View style={AppStyles.formContainer}>
      <Input
        label="Email"
        {...register('email')}
        onChangeText={text => setValue('email', text)}
        value={watch('email')}
        keyboardType="email-address"
        errorMessage={errors.email?.message}
        placeholder="Email@..."
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
      <View style={[AppStyles.formButtons, {marginTop: 150}]}>
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
