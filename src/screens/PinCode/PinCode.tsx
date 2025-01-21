import React, {FC, useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ASSETS} from '../../utils/assets';
import {Button} from '../../components';
import {AppColors} from '../../utils/colors';
import IconContainer from '../../components/IconContainer';
import {AppStyles} from '../../utils/styles';
import {useDispatch} from 'react-redux';
import {addPin} from '../../redux/slices/auth.slice';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, Routes} from '../../utils/routes';

type KeyPadProps = {
  handleKeyPress: (value: string) => void;
  handleBackspace: () => void;
};

const KeyPad: FC<KeyPadProps> = ({handleKeyPress, handleBackspace}) => {
  return (
    <View style={styles.keypad}>
      <View style={styles.row}>
        {[1, 2, 3].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.key}
            onPress={() => handleKeyPress(number.toString())}>
            <Text style={styles.keyText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {[4, 5, 6].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.key}
            onPress={() => handleKeyPress(number.toString())}>
            <Text style={styles.keyText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {[7, 8, 9].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.key}
            onPress={() => handleKeyPress(number.toString())}>
            <Text style={styles.keyText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <View style={[styles.key, styles.emptyKey]} />
        <TouchableOpacity
          style={styles.key}
          onPress={() => handleKeyPress('0')}>
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={handleBackspace}>
          <Image style={styles.icon} source={ASSETS.backspace} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

type KeyContainerProps = {
  pin: string;
};

const KeyContainer: FC<KeyContainerProps> = ({pin}) => {
  return (
    <View style={styles.pinContainer}>
      {[...Array(5)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.pinDot,
            {
              backgroundColor:
                index < pin.length
                  ? AppColors.primary
                  : AppColors.chinese_silver,
            },
          ]}
        />
      ))}
    </View>
  );
};

const PinCode = () => {
  const [pin, setPin] = useState<string>('');
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const navigateToHome = useCallback(() => {
    navigation.navigate(Routes.HOME);
  }, [navigation]);

  const onSubmit = () => {
    dispatch(addPin({pin}));

    navigateToHome();
  };

  const handleKeyPress = (value: string) => {
    if (pin.length < 5) {
      setPin(prev => prev + value);
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <IconContainer icon={ASSETS.smartphone} />
        <Text style={[AppStyles.title, {marginVertical: 15}]}>
          Create a Pin code
        </Text>
        <Text style={AppStyles.subtitle}>enter 5 digit code:</Text>
        <KeyContainer pin={pin} />
      </View>
      <KeyPad
        handleKeyPress={handleKeyPress}
        handleBackspace={handleBackspace}
      />
      <Button
        title="Continue"
        backgroundColor={AppColors.primary}
        onPress={onSubmit}
        disabled={pin.length < 5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
  },

  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    width: '50%',
  },
  icon: {
    width: 24,
    height: 24,
  },
  pinDot: {
    width: 22,
    height: 22,
    borderRadius: 50,
  },
  keypad: {
    marginTop: 150,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: AppColors.chinese_silver,
    marginVertical: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
  key: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  emptyKey: {
    backgroundColor: 'transparent',
  },
});

export default PinCode;
