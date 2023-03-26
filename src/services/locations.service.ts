import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const LocationsService = {
  async getAll() {
    const { data } = await axios.get(`/location`);
    return data.results;
  },
  async getById(id: number) {
    const { data } = await axios.get(`/location`, {
      params: {
        id,
      },
    });
    return data[0];
  },
};
