import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostType from '../../types/post.type';
import {AppColors} from '../../utils/colors';
import {Button, ScreenHeader, ScreenSubtitle} from '../../components';
import {useTranslation} from 'react-i18next';
import {NavigationProps} from '../../utils/routes';
import {AppStyleValues} from '../../utils/styles';

const Post = () => {
  const navigation = useNavigation<NavigationProps>();
  const {t} = useTranslation();
  const route = useRoute<RouteProp<{Post: PostType}>>();
  const {title, body} = route.params;

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScreenHeader style={styles.headerContainer}>
        <Text style={styles.headerName}>{title}</Text>
      </ScreenHeader>
      <View style={styles.content}>
        <ScreenSubtitle style={styles.subtitle} subtitle={t('post')} />
        <View style={styles.bodyContainer}>
          <Text>{body}</Text>
        </View>
      </View>
      <Button
        onPress={navigateBack}
        title="Back"
        backgroundColor={AppColors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerContainer: {
    width: AppStyleValues.maxWidth,
  },
  headerSubtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  headerName: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    marginBottom: 70,
  },
  bodyContainer: {
    backgroundColor: AppColors.chinese_silver,
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  subtitle: {
    marginLeft: 20,
  },
});

export default Post;
