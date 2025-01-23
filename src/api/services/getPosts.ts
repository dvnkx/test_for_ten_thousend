import axios from 'axios';

export const fetchPostsWithStart = async (start: number, limit: number) => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _start: start,
      _limit: limit,
    },
  });
  return data;
};

export const fetchSearchPosts = async (search: string = '') => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      title_like: search,
    },
  });
  return data;
};
