import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {ASSETS} from '../../utils/assets';
import {Button, IconContainer} from '../../components';
import {AppColors} from '../../utils/colors';
import {AppStyles, AppStyleValues} from '../../utils/styles';
import Keychain from 'react-native-keychain';
import {useDispatch} from 'react-redux';
import {verify} from '../../redux/slices/verify.slice';
import {StepType, TempPinType} from '../../types/pin.types';
import {useTranslation} from 'react-i18next';
import ReactNativeBiometrics from 'react-native-biometrics';

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
  const dispatch = useDispatch();
  const [pin, setPin] = useState<string>('');
  const [step, setStep] = useState<StepType>('verify');
  const [tempPin, setTempPin] = useState<TempPinType>(null);
  const {t} = useTranslation();
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });

  useEffect(() => {
    const verifyPin = async () => {
      if (step === 'verify') {
        const {success} = await rnBiometrics.simplePrompt({
          promptMessage: 'Confirm your identity',
        });

        if (success) {
          dispatch(verify());
        }
      }
    };

    const checkExistingPin = async () => {
      const credentials = await Keychain.getGenericPassword({
        service: 'userPin',
      });

      if (!credentials) {
        setStep('create');
      } else {
        verifyPin();
      }
    };

    checkExistingPin();
  }, []);

  const handleKeyPress = (value: string) => {
    if (pin.length < 5) {
      setPin(prev => prev + value);
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const resetPinAndStep = (newStep: StepType) => {
    setPin('');
    setTempPin(null);
    setStep(newStep);
  };

  const onSubmit = async () => {
    try {
      if (step === 'create') {
        setTempPin(pin);
        setPin('');
        setStep('confirm');
      } else if (step === 'confirm') {
        if (pin === tempPin) {
          await Keychain.setGenericPassword('userPin', pin, {
            service: 'userPin',
          });
          dispatch(verify());
          resetPinAndStep('verify');
        } else {
          Alert.alert('Error', 'PIN codes do not match. Try again.');
          resetPinAndStep('create');
        }
      } else if (step === 'verify') {
        const credentials = await Keychain.getGenericPassword({
          service: 'userPin',
        });

        if (credentials && credentials?.password === pin) {
          dispatch(verify());
        } else {
          Alert.alert(
            t('pinCode.error.error'),
            t('pinCode.error.errorMessage'),
          );
          setPin('');
        }
      }
    } catch (error) {
      console.error('Error submitting PIN:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <IconContainer icon={ASSETS.smartphone} />
        <Text style={[AppStyles.title, styles.title]}>
          {step === 'create'
            ? 'Create a PIN code'
            : step === 'confirm'
            ? 'Repeat a PIN code'
            : t('pinCode.title')}
        </Text>
        <Text style={AppStyles.subtitle}>{t('pinCode.subtitle')}</Text>
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
  title: {
    marginVertical: 15,
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
    width: AppStyleValues.maxWidth,
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
    color: AppColors.dark_charcoal,
  },
  emptyKey: {
    backgroundColor: 'transparent',
  },
});

export default PinCode;
