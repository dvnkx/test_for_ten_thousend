import React, {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {Alert, StyleSheet, View} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {AppColors} from '../../../utils/colors';
import {Button, Input, Loader} from '../../../components';
import {signInSchema, signInValues} from '../../../schemas/signIn.schema';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, Routes} from '../../../utils/routes';
import {AppStyles} from '../../../utils/styles';
import {useDispatch} from 'react-redux';
import {login} from '../../../redux/slices/auth.slice';
import {useMutation} from '@tanstack/react-query';
import loginUser from '../../../api/services/login.service';

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
  const dispatch = useDispatch();

  const navigateToSignUp = useCallback(() => {
    navigation.navigate(Routes.SIGNUP);
  }, [navigation]);

  const navigateToPinCode = useCallback(() => {
    navigation.navigate(Routes.PINCODE);
  }, [navigation]);

  const mutation = useMutation({
    mutationFn: async (data: signInValues) => {
      return loginUser(data.username, data.password);
    },
    onSuccess: data => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {accessToken, refreshToken, ...userData} = data;

      const user = {...userData, localization: 'en'};

      dispatch(login({token: accessToken, user}));

      navigateToPinCode();
    },
    onError: () => {
      Alert.alert('Error', 'Login failed, please try again.');
    },
  });

  const onSubmit = async (data: signInValues) => {
    mutation.mutate(data);
  };

  return (
    <View style={AppStyles.formContainer}>
      {mutation.isPending && <Loader />}
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
      <View style={[AppStyles.formButtons, styles.button]}>
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

const styles = StyleSheet.create({
  button: {
    marginTop: 150,
    gap: 15,
  },
});

export default SignInForm;
