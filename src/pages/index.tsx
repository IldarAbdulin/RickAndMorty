import { useState } from 'react';
import { NextPage } from 'next';
import CharactersPage from '@/components/screens/characters/CharactersPage';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { getCharacters } from '@/redux/slices/character-slice';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { characters, pages } = useAppSelector(
    ({ characterSlice }) => characterSlice
  );
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCharacters(page));
  }, [dispatch, page, setPage]);

  return (
    <>
      <CharactersPage
        characters={characters}
        pages={pages}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
export default Home;
