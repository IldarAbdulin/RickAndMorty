import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import EpisodeCart from './EpisodeCart';
import { IEpisodeDataById } from '@/interfaces/epidodes.interface';

const EpisodesDetail: FC<IEpisodeDataById> = ({ episode }) => {
  return (
    <Layout title={episode.name}>
      <EpisodeCart episode={episode} />
    </Layout>
  );
};
export default EpisodesDetail;
