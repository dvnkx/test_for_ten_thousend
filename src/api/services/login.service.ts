import axios from 'axios';
import {AUTH_API} from '@env';

const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${AUTH_API}`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Login failed, please  again.');
  }
};

export default loginUser;
