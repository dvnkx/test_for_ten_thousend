import axios from 'axios';
import {POSTS_API, LIMIT, TOTAL} from '@env';
import PostType from '../../types/post.type';

export const fetchPostsFrom = async (start: number, limit: number) => {
  const {data} = await axios.get(`${POSTS_API}`, {
    params: {
      _start: start,
      _limit: limit,
    },
  });
  return data;
};

export const fetchPosts = async ({
  pageParam,
  search,
}: {
  pageParam: number;
  search: string;
}): Promise<{
  data: PostType[];
  nextPage: number | null;
}> => {
  const {data} = await axios.get(`${POSTS_API}`, {
    params: {
      _start: search ? undefined : pageParam,
      _limit: search ? undefined : LIMIT,
      title_like: search,
    },
  });

  const nextPage =
    search || pageParam + LIMIT >= TOTAL ? null : pageParam + LIMIT;
  return {data, nextPage};
};
