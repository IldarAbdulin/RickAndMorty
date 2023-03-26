export interface ICharacter {
  id: number;
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
