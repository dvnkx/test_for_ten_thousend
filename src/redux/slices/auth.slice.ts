import {createSlice} from '@reduxjs/toolkit';
import {UserType} from '../../types/user.type';

type authSliceType = {
  token: string | null;
  user: UserType | null;
};

const initialState: authSliceType = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: state => {
      state.token = null;
      state.user = null;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
