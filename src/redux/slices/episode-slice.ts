import { IEpisode } from '@/interfaces/epidodes.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const getEpidodes = createAsyncThunk<
  IEpisode[],
  any,
  { rejectValue: string }
>('getCharacters', async function (args, { dispatch }) {
  const { page, name } = args;
  const { data } = await axios.get(`/episode/?page=${page}&name=${name}`);
  dispatch(totalPages(data.info.pages));
  return data.results;
});

export const getEpisodeById = createAsyncThunk<IEpisode, number>(
  'getEpisodeById',
  async function (id: number) {
    const { data } = await axios.get(`/episode/${id}`);
    return data;
  }
);

type EpisodeState = {
  episodes: IEpisode[];
  pages: number;
  loading: boolean;
  episode: IEpisode;
};

const initialState: EpisodeState = {
  episodes: [],
  pages: 0,
  loading: false,
  episode: {},
};

export const episodeSlice = createSlice({
  name: 'episodeSlice',
  initialState: initialState,
  reducers: {
    totalPages: (state, action) => {
      state.pages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEpidodes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEpidodes.fulfilled, (state, action) => {
      state.episodes = action.payload;
      state.loading = false;
    });
    builder.addCase(getEpisodeById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getEpisodeById.fulfilled, (state, action) => {
      state.episode = action.payload;
      state.loading = false;
    });
  },
});
const { totalPages } = episodeSlice.actions;
