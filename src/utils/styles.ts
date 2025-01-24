import {StyleSheet} from 'react-native';
import {AppColors} from './colors';

export enum AppStyleValues {
  maxWidth = '100%',
  maxHeight = '100%',
}

export const AppStyles = StyleSheet.create({
  blockContainer: {
    width: AppStyleValues.maxWidth,
    backgroundColor: AppColors.lotion,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: AppColors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },

  authWrapper: {
    height: AppStyleValues.maxHeight,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  authContainer: {
    alignItems: 'center',
    width: AppStyleValues.maxWidth,
    height: '80%',
    backgroundColor: AppColors.lotion,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: AppColors.dark_charcoal,
  },
  subtitle: {
    fontSize: 16,
    color: AppColors.granite_gray,
    marginTop: 4,
  },

  formContainer: {
    width: AppStyleValues.maxWidth,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 20,
  },
  formButtons: {
    width: AppStyleValues.maxWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  mainContainer: {margin: 20},
  itemWidth: {width: AppStyleValues.maxWidth},
});
