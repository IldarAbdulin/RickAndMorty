export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}
export interface ICharacterData {
  characters: ICharacter[];
  pages: number;
  page: number;
  setPage: (value: number) => void;
  name: string;
  setName: (value: string) => void;
  species: string;
  setSpecies: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
}
export interface ICharacterDataById {
  character: ICharacter;
}
