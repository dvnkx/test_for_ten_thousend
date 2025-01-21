import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpValues, signUpSchema} from '../../../schemas/signUp.schema';
import {AppColors} from '../../../utils/colors';
import {Button, Input} from '../../../components';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    watch,
  } = useForm<signUpValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: signUpValues) => {
    console.log(
      `Name: ${data.name} Email: ${data.email} Password: ${data.password}`,
    );
  };

  return (
    <View style={styles.container}>
      <Input
        label="Name"
        {...register('name')}
        onChangeText={text => setValue('name', text)}
        value={watch('name')}
        errorMessage={errors.name?.message}
      />
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
      <View style={styles.button}>
        <Button
          title="Continue"
          backgroundColor={AppColors.primary}
          onPress={handleSubmit(onSubmit)}
        />
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
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
  },
});

export default SignUpForm;
