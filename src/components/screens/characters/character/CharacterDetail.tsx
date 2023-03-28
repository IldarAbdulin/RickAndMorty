import { FC } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { ICharacterDataById } from '@/interfaces/characters.interface';

const CharacterDetail: FC<ICharacterDataById> = ({ character }) => {
  return (
    <Layout title={character.name}>
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      />
      <h1>{character.name}</h1>
    </Layout>
  );
};
export default CharacterDetail;
