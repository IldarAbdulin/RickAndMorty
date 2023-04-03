import { useState } from 'react';
import { NextPage } from 'next';
import Episodes from '@/components/screens/episodes/EpisodesPage';
import { IEpisodeData } from '@/interfaces/epidodes.interface';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { getEpidodes } from '@/redux/slices/episode-slice';

const EpisodesPage: NextPage = () => {
  const { episodes, pages } = useAppSelector(
    ({ episodeSlice }) => episodeSlice
  );
  const [page, setPage] = useState(1);
  const [name, setName] = useState<string>('');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEpidodes({ page, name }));
  }, [dispatch, page, name]);
  return (
    <>
      <Episodes
        episodes={episodes}
        pages={pages}
        page={page}
        setPage={setPage}
        name={name}
        setName={setName}
      />
    </>
  );
};

export default EpisodesPage;
