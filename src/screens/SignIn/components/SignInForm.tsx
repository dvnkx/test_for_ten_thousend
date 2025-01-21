import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpValues, signUpSchema} from '../../../schemas/signUp.schema';
import {AppColors} from '../../../utils/colors';
import {Button, Input} from '../../../components';
import {signInSchema} from '../../../schemas/signIn.schema';

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

  const onSubmit = (data: signUpValues) => {
    console.log(` Email: ${data.email} Password: ${data.password}`);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        {...register('email')}
        onChangeText={text => setValue('email', text)}
        value={watch('email')}
        keyboardType="email-address"
        errorMessage={errors.email?.message}
      />
      <Input
        label="Password"
        {...register('password')}
        onChangeText={text => setValue('password', text)}
        value={watch('password')}
        secureTextEntry
        errorMessage={errors.password?.message}
      />
      <View style={styles.buttons}>
        <Button
          title="Continue"
          backgroundColor={AppColors.primary}
          onPress={handleSubmit(onSubmit)}
        />
        <Button title="Create Account" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 150,
    width: '100%',
  },
});

export default SignInForm;
