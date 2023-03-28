import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '@/hooks';
import CharacterDetail from '@/components/screens/characters/character/CharacterDetail';
import { getCharacterById } from '@/redux/slices/character-slice';

const CharacterSinglePage: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  const { character } = useAppSelector(({ characterSlice }) => characterSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCharacterById(Number(query.id)));
  }, [router, dispatch]);
  return (
    <>
      <CharacterDetail character={character} />
    </>
  );
};

export default CharacterSinglePage;
