import {StyleSheet} from 'react-native';
import {AppColors} from './colors';

export const AppStyles = StyleSheet.create({
  blockContainer: {
    width: '100%',
    backgroundColor: AppColors.lotion,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: AppColors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },

  authWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  authContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    backgroundColor: AppColors.lotion,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  formButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
  },
});
