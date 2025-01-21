import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpValues, signUpSchema} from '../../../schemas/signUp.schema';
import {AppColors} from '../../../utils/colors';
import {Button, Input} from '../../../components';
import {AppStyles} from '../../../utils/styles';

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
    <View style={AppStyles.formContainer}>
      <Input
        label="Name"
        {...register('name')}
        onChangeText={text => setValue('name', text)}
        value={watch('name')}
        errorMessage={errors.name?.message}
        placeholder="Name..."
      />
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
      <View style={AppStyles.formButtons}>
        <Button
          title="Continue"
          backgroundColor={AppColors.primary}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default SignUpForm;
