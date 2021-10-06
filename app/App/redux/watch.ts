import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Data {
  watchId: number | null;
}

interface ILocation {
  data: Data;
}

const initialState: ILocation = {
  data: {
    watchId: null,
  },
};

export const watchSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setWatch: (state, action: PayloadAction<Data>) => {
      state.data = action.payload;
    },
  },
});

export const { setWatch } = watchSlice.actions;

export default watchSlice.reducer;
