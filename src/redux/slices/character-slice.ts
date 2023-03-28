import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICharacter } from '@/interfaces/characters.interface';
import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const getCharacters = createAsyncThunk<
  ICharacter[],
  undefined,
  { rejectValue: string }
>('getCharacters', async function (_, {}) {
  const { data } = await axios.get('/character');
  return data.results;
});

export const getCharacterById = createAsyncThunk<ICharacter, number>(
  'getCharacterById',
  async function (id: number) {
    const { data } = await axios.get(`/character/${id}`);
    return data;
  }
);

type CharacterState = {
  characters: ICharacter[];
  loading: boolean;
  character: ICharacter;
};

const initialState: CharacterState = {
  characters: [],
  loading: false,
  character: {},
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.loading = false;
    });
    builder.addCase(getCharacterById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacterById.fulfilled, (state, action) => {
      state.character = action.payload;
      state.loading = false;
    });
  },
});
