export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}
export interface IEpisodeData {
  episodes: IEpisode[];
  pages: number;
  page: number;
  setPage: (value: number) => void;
  name: string;
  setName: (value: string) => void;
}
export interface IEpisodeDataById {
  episode: IEpisode;
}
