export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}
export interface ILocationData {
  locations: ILocation[];
  pages: number;
  page: number;
  setPage: (value: number) => void;
}
export interface ILocationDataById {
  location: ILocation;
}
