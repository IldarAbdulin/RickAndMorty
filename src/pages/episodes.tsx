import { GetStaticProps, NextPage } from 'next';
import { EpisodesService } from '@/services/episodes.service';
import Episodes from '@/components/screens/episodes/EpisodesPage';
import { IEpisodeData } from '@/interfaces/epidodes.interface';

const EpisodesPage: NextPage<IEpisodeData> = ({ episodes }) => {
  return (
    <>
      <Episodes episodes={episodes} />
    </>
  );
};
export const getServerSideProps: GetStaticProps<IEpisodeData> = async () => {
  const episodes = await EpisodesService.getAll();
  return {
    props: { episodes },
  };
};

export default EpisodesPage;
