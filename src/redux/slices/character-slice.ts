import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICharacter } from '@/interfaces/characters.interface';
import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const getCharacters = createAsyncThunk<
  ICharacter[],
  any,
  { rejectValue: string }
>('getCharacters', async function (myArgs, { dispatch }) {
  const { page, name, species, gender, status } = myArgs;
  const { data } = await axios.get(
    `/character/?page=${page}&name=${name}&species=${species}&gender=${gender}&status=${status}`
  );
  dispatch(totalPages(data.info.pages));
  return data.results;
});

export const getCharacterById = createAsyncThunk<ICharacter, number>(
  'getCharacterById',
  async function (id) {
    const { data } = await axios.get(`/character/${id}`);
    return data;
  }
);

type CharacterState = {
  characters: ICharacter[];
  pages: number;
  loading: boolean;
  character: ICharacter;
  nextPage: string;
};

const initialState: CharacterState = {
  characters: [],
  loading: false,
  pages: 0,
  character: {},
  nextPage: '',
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState: initialState,
  reducers: {
    totalPages: (state, action) => {
      state.pages = action.payload;
    },
  },
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

const { totalPages } = characterSlice.actions;
