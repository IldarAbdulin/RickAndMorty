import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { characterSlice } from './slices/character-slice';
import { episodeSlice } from './slices/episode-slice';
import { locationSlice } from './slices/location-slice';

const rootReducer = combineReducers({
  characterSlice: characterSlice.reducer,
  locationSlice: locationSlice.reducer,
  episodeSlice: episodeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
