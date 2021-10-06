import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  token: string;
  role: string;
  gender: string;
  lastname: string;
}

interface Init {
  user: User;
}

const initialState: Init = {
  user: {
    token: '',
    name: '',
    lastname: '',
    role: '',
    id: '',
    gender: '',
  },
};

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { saveUser, clearUser } = userSlide.actions;

export default userSlide.reducer;
