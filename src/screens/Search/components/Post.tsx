import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {NavigationProps, Routes} from '../../../utils/routes';
import PostType from '../../../types/post.type';
import BlockComponent from '../../Home/components/Block';
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
    <BlockComponent
      onPress={() => navigateToPost({userId, id, body, title})}
      style={AppStyles.itemWidth}
      key={id}>
      <BlockComponent.Title>
        {t('posts.id')}: {id}
      </BlockComponent.Title>
      <BlockComponent.SubTitle>
        {t('posts.name')}: {title}
      </BlockComponent.SubTitle>
    </BlockComponent>
  );
};

export default Post;
