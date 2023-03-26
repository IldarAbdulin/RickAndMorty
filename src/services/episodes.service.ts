import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const EpisodesService = {
  async getAll() {
    const { data } = await axios.get(`/episode`);
    return data.results;
  },
  async getById(id: number) {
    const { data } = await axios.get(`/episode`, {
      params: {
        id,
      },
    });
    return data[0];
  },
};
