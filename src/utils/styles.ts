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
});
