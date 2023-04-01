import { ILocation } from '@/interfaces/locations.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const getLocations = createAsyncThunk<ILocation[], number>(
  'getCharacters',
  async function (numberPapge, { dispatch }) {
    const { data } = await axios.get(`/location/?page=${numberPapge}`);
    dispatch(totalPages(data.info.pages));
    return data.results;
  }
);

export const getLocationById = createAsyncThunk<ILocation, number>(
  'getLocationById',
  async function (id: number) {
    const { data } = await axios.get(`/location/${id}`);
    return data;
  }
);

type LocationState = {
  locations: ILocation[];
  loading: boolean;
  pages: number;
  location: ILocation;
};

const initialState: LocationState = {
  locations: [],
  loading: false,
  pages: 0,
  location: {},
};

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState: initialState,
  reducers: {
    totalPages: (state, action) => {
      state.pages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLocations.fulfilled, (state, action) => {
      state.locations = action.payload;
      state.loading = false;
    });
    builder.addCase(getLocationById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLocationById.fulfilled, (state, action) => {
      state.location = action.payload;
      state.loading = false;
    });
  },
});
const { totalPages } = locationSlice.actions;
