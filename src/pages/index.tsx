import { NextPage } from 'next';
import CharactersPage from '@/components/screens/characters/CharactersPage';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { getCharacters } from '@/redux/slices/character-slice';
import CustomLoader from '@/components/ui/loader/CustomLoader';

const Home: NextPage = () => {
  const { characters, loading } = useAppSelector(
    ({ characterSlice }) => characterSlice
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  console.log(loading);

  return (
    <>
      <CharactersPage characters={characters} />
    </>
  );
};
export default Home;
