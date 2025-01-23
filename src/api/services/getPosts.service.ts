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
    pageParam + Number(LIMIT) < Number(TOTAL)
      ? pageParam + Number(LIMIT)
      : null;
  return {data, nextPage};
};
