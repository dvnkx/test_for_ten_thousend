import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {ASSETS} from '../utils/assets';
import {AppColors} from '../utils/colors';
import {FC} from 'react';

type UserSectionProps = {
  title: string;
};

const UserSection: FC<UserSectionProps> = ({title}) => {
  return (
    <TouchableOpacity style={styles.user}>
      <View>
        <View style={styles.avatar}>
          <Image style={styles.avatarImg} source={ASSETS.addAvatar} />
        </View>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Personal Account</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.chinese_silver,
  },
  avatar: {
    backgroundColor: 'rgba(136, 231, 136, 0.3)',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
    marginLeft: 16,
  },
  avatarImg: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppColors.dark_charcoal,
  },
  subtitle: {
    fontSize: 15,
    color: AppColors.granite_gray,
    marginTop: 4,
  },
});

export default UserSection;
