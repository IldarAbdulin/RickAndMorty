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
  name: string;
  setName: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  dimension: string;
  setDimension: (value: string) => void;
}
export interface ILocationDataById {
  location: ILocation;
}
