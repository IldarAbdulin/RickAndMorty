import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import { ICharacterDataById } from '@/interfaces/characters.interface';

const CharacterDetail: FC<ICharacterDataById> = ({ character }) => {
  return (
    <Layout title={character.name}>
      <h1>{character.name}</h1>
    </Layout>
  );
};
export default CharacterDetail;
