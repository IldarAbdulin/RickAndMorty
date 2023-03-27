import { NextPage } from 'next';
import { ICharacterDataById } from '@/interfaces/characters.interface';
import CharacterDetail from '@/components/screens/characters/character/CharacterDetail';

const CharacterSinglePage: NextPage<ICharacterDataById> = ({ character }) => {
  return (
    <>
      <CharacterDetail character={character} />
    </>
  );
};

export default CharacterSinglePage;
