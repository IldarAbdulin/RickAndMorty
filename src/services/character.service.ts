import axios from 'axios';
import { ICharacter } from '@/interfaces/characters.interface';

axios.defaults.baseURL = process.env.BASE_URL;

export const CharacterService = {
  async getAll() {
    const { data } = await axios.get(`/character`);
    return data.results;
  },
  async getById(id: number) {
    const { data } = await axios.get<ICharacter[]>(`/character`, {
      params: {
        id,
      },
    });
    return data[0];
  },
};
