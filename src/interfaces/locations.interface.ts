export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
}
export interface ILocationData {
  locations: ILocation[];
}
export interface ILocationDataById {
  location: ILocation;
}
