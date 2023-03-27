import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { slice } from './slices';

export const store = configureStore({
  reducer: slice.reducer,
});
