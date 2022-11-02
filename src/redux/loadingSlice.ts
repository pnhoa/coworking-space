import { RootState } from '../app/store';
import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  loading: boolean;
  start: boolean;
}

export const initialState: LoadingState = {
  loading: false,
  start: true,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export const loadingSelector = (state: RootState) => state.loading;

const loadingReducer = loadingSlice.reducer;
export default loadingReducer;
