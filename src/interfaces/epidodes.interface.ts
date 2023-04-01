export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}
export interface IEpisodeData {
  episodes: IEpisode[];
  pages: number;
  page: number;
  setPage: (value: number) => void;
}
export interface IEpisodeDataById {
  episode: IEpisode;
}
