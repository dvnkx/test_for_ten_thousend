import React, {FC, useEffect, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import {Input, Loader, ScreenTitle} from '../../components';
import {useQuery} from '@tanstack/react-query';
import {fetchSearchPosts} from '../../api/services/getPosts';
import PostType from '../../types/post.type';
import Post from './components/Post';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
import {useDebounce} from '../../hooks/useDebounce';

type PostsProps = {
  search: string;
};

const Posts: FC<PostsProps> = ({search}) => {
  const debouncedSearch = useDebounce(search, 500);
  const {data, isLoading, isError} = useQuery<PostType[]>({
    queryFn: () => {
      if (debouncedSearch) {
        return fetchSearchPosts(debouncedSearch);
      } else {
        return fetchSearchPosts('');
      }
    },
    queryKey: ['searchPosts', debouncedSearch],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return;
  }

  return (
    <>
      {data &&
        data.map(post => (
          <Post
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
    </>
  );
};

const Search = () => {
  const [search, setSearch] = useState('');
  const {t} = useTranslation();
  const inputRef = useRef<TextInput>(null);

  const handleSearch = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(e.nativeEvent.text);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{justifyContent: 'center'}}
      style={styles.container}>
      <ScreenTitle title={t('search.title')} />
      <Input
        value={search}
        onChange={handleSearch}
        ref={inputRef}
        placeholder={t('search.placeholder')}
        style={styles.inputContainer}
      />
      <Posts search={search} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: 'flex',
  },
  containerContent: {
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
});

export default Search;
