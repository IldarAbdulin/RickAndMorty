import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import { IEpisodeDataById } from '@/interfaces/epidodes.interface';

const EpisodesDetail: FC<IEpisodeDataById> = ({ episode }) => {
  return (
    <Layout title={episode.name}>
      <h1>{episode.name}</h1>
    </Layout>
  );
};
export default EpisodesDetail;
