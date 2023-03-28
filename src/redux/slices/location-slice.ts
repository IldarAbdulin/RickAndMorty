import { ILocation } from '@/interfaces/locations.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const getLocations = createAsyncThunk<
  ILocation[],
  undefined,
  { rejectValue: string }
>('getCharacters', async function (_, {}) {
  const { data } = await axios.get('/location');
  return data.results;
});

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
  location: ILocation;
};

const initialState: LocationState = {
  locations: [],
  loading: false,
  location: {},
};

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState: initialState,
  reducers: {},
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
