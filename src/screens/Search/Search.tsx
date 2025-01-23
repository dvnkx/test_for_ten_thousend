import React, {FC, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {Input, Loader, ScreenTitle} from '../../components';
import {useInfiniteQuery} from '@tanstack/react-query';
import {fetchPosts} from '../../api/services/getPosts.service';
import {useTranslation} from 'react-i18next';
import {useDebounce} from '../../hooks/useDebounce.hook';
import Post from './components/Post';

type PostsProps = {
  search: string;
};

const Posts: FC<PostsProps> = ({search}) => {
  const debouncedSearch = useDebounce(search, 500);

  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextPage,
  });

  if (isLoading) {
    <Loader />;
  }

  if (isError) {
    <Text>{error.message}</Text>;
  }

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (!data) return <Text>There are no posts</Text>;

  return (
    <>
      {data && (
        <FlatList
          data={data.pages.flatMap(posts => posts.data)}
          renderItem={({item}) => (
            <Post
              key={item.id}
              id={item.id}
              userId={item.userId}
              title={item.title}
              body={item.body}
            />
          )}
          keyExtractor={item => item.id.toString()}
          onEndReached={handleLoadMore}
          ListFooterComponent={isFetchingNextPage ? <Loader /> : null}
        />
      )}
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
    <View style={styles.container}>
      <ScreenTitle title={t('search.title')} />
      <Input
        value={search}
        onChange={handleSearch}
        ref={inputRef}
        placeholder={t('search.placeholder')}
        style={styles.inputContainer}
      />
      <Posts search={search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  containerContent: {
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
});

export default Search;
