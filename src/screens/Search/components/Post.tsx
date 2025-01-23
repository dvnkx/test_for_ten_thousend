import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {NavigationProps, Routes} from '../../../utils/routes';
import PostType from '../../../types/post.type';
import HomeComponent from '../../Home/components/Task';
import {useTranslation} from 'react-i18next';
import {AppStyles} from '../../../utils/styles';

const Post = ({userId, id, body, title}: PostType) => {
  const {t} = useTranslation();

  const navigation = useNavigation<NavigationProps>();

  const navigateToPost = useCallback(
    (post: PostType) => {
      navigation.dispatch(
        CommonActions.navigate({name: Routes.POST, params: {...post}}),
      );
    },
    [navigation],
  );

  return (
    <HomeComponent
      onPress={() => navigateToPost({userId, id, body, title})}
      style={AppStyles.itemWidth}
      key={id}>
      <HomeComponent.Title>
        {t('posts.id')}: {id}
      </HomeComponent.Title>
      <HomeComponent.SubTitle>
        {t('posts.name')}: {title}
      </HomeComponent.SubTitle>
    </HomeComponent>
  );
};

export default Post;
