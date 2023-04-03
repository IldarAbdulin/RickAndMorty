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
  const [species, setSpecies] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCharacters({ page, name, species, gender, status }));
  }, [dispatch, page, name, species, gender, status]);

  return (
    <>
      <CharactersPage
        characters={characters}
        pages={pages}
        page={page}
        setPage={setPage}
        name={name}
        setName={setName}
        species={species}
        setSpecies={setSpecies}
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
      />
    </>
  );
};
export default Home;
