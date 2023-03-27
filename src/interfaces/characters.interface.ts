export interface Info<T> {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T;
}

export interface ICharacter {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  image: string;
}
export interface ICharacterData {
  characters: ICharacter[];
}
export interface ICharacterDataById {
  character: ICharacter;
}
