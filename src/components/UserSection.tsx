import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../utils/colors';
import React, {FC} from 'react';
import {ASSETS} from '../utils/assets';
import IconContainer from './IconContainer';
import {AppStyles, AppStyleValues} from '../utils/styles';

type UserSectionProps = {
  title: string;
};

const UserSection: FC<UserSectionProps> = ({title}) => {
  return (
    <TouchableOpacity style={styles.user}>
      <IconContainer
        icon={ASSETS.person}
        containerStyles={styles.iconContainer}
      />
      <View>
        <Text style={AppStyles.title}>{title}</Text>
        <Text style={AppStyles.subtitle}>Personal Account</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user: {
    width: AppStyleValues.maxWidth,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.chinese_silver,
  },
  iconContainer: {
    backgroundColor: 'rgba(136, 231, 136, 0.3)',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
    marginLeft: 16,
  },
});

export default UserSection;
