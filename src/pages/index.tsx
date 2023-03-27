import { NextPage } from 'next';
import CharactersPage from '@/components/screens/characters/CharactersPage';
import { ICharacterData } from '@/interfaces/characters.interface';

const Home: NextPage<ICharacterData> = ({ characters }) => {
  return (
    <>
      <CharactersPage characters={characters} />
    </>
  );
};
export default Home;
