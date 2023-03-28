import { NextPage } from 'next';
import Episodes from '@/components/screens/episodes/EpisodesPage';
import { IEpisodeData } from '@/interfaces/epidodes.interface';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { getEpidodes } from '@/redux/slices/episode-slice';

const EpisodesPage: NextPage = () => {
  const { episodes } = useAppSelector(({ episodeSlice }) => episodeSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEpidodes());
  }, [dispatch]);
  return (
    <>
      <Episodes episodes={episodes} />
    </>
  );
};

export default EpisodesPage;
