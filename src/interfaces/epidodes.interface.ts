export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}
export interface IEpisodeData {
  episodes: IEpisode[];
}
export interface IEpisodeDataById {
  episode: IEpisode;
}
