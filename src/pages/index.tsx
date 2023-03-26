import { NextPage, GetStaticProps } from 'next';
import CharactersPage from '@/components/screens/characters/CharactersPage';
import { ICharacterData } from '@/interfaces/characters.interface';
import { CharacterService } from '@/services/character.service';

const Home: NextPage<ICharacterData> = ({ characters }) => {
  return (
    <>
      <CharactersPage characters={characters} />
    </>
  );
};

export const getServerSideProps: GetStaticProps<ICharacterData> = async () => {
  const characters = await CharacterService.getAll();
  return {
    props: { characters },
  };
};

export default Home;
