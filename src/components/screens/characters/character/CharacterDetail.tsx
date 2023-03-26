import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import Character from './CharacterCart';
import { ICharacterDataById } from '@/interfaces/characters.interface';

const CharacterDetail: FC<ICharacterDataById> = ({ character }) => {
  return (
    <Layout title={character.name}>
      <Character character={character} />
    </Layout>
  );
};
export default CharacterDetail;
