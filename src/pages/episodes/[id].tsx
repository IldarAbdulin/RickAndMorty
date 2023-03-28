import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getEpisodeById } from '@/redux/slices/episode-slice';
import EpisodesDetail from '@/components/screens/episodes/episode/EpisodeDetail';

const LocationSinglePage = () => {
  const router = useRouter();
  const { query } = router;

  const { episode } = useAppSelector(({ episodeSlice }) => episodeSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEpisodeById(Number(query.id)));
  }, [router, dispatch]);

  return (
    <>
      <EpisodesDetail episode={episode} />
    </>
  );
};
export default LocationSinglePage;
