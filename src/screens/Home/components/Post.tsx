import {useNavigation, CommonActions} from '@react-navigation/native';
import React, {useCallback} from 'react';
import PostType from '../../../types/post.type';
import {NavigationProps, Routes} from '../../../utils/routes';
import BlockComponent from './Block';
import {AppStyles} from '../../../utils/styles';

const Post = ({userId, id, title, body}: PostType) => {
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
      onPress={() => navigateToPost({userId, id, title, body})}
      style={AppStyles.itemWidth}
      key={id}>
      <BlockComponent.Title>{title}</BlockComponent.Title>
      <BlockComponent.SubTitle>{body}</BlockComponent.SubTitle>
    </BlockComponent>
  );
};

export default Post;
