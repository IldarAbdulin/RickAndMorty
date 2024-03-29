import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, MenuItem, Pagination, PaginationItem } from '@mui/material';
import { specieses, statuses, genders } from '@/constants';
import Layout from '@/components/layout/Layout';
import CustomSelect from '@/components/ui/select/CustomSelect';
import CustomInput from '@/components/ui/input/CustomInput';
import { ICharacterData } from '@/interfaces/characters.interface';
import CharacterCart from './character/CharacterCart';

const CharactersPage: FC<ICharacterData> = ({
  characters,
  pages,
  page,
  setPage,
  name,
  setName,
  species,
  setSpecies,
  gender,
  setGender,
  status,
  setStatus,
}) => {
  return (
    <Layout title="Characters">
      <Box className="characters">
        <Box className="characters__image">
          <Image
            src="/assets/character.png"
            alt="Rick and Morty"
            width={500}
            height={200}
          />
        </Box>
        <Box className="characters__selectors">
          <CustomInput
            className="w-[240px]"
            label="Filter by Name"
            value={name}
            setValue={setName}
          />
          <CustomSelect
            className="w-[240px]"
            inputLabel="Species"
            elemValue={species}
            setElemValue={setSpecies}
          >
            {specieses.map((s) => (
              <MenuItem key={s.id} value={s.title}>
                {s.title}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomSelect
            className="w-[240px]"
            inputLabel="Gender"
            elemValue={gender}
            setElemValue={setGender}
          >
            {genders.map((g) => (
              <MenuItem key={g.id} value={g.title}>
                {g.title}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomSelect
            className="w-[240px]"
            inputLabel="Status"
            elemValue={status}
            setElemValue={setStatus}
          >
            {statuses.map((s) => (
              <MenuItem key={s.id} value={s.title}>
                {s.title}
              </MenuItem>
            ))}
          </CustomSelect>
        </Box>
        <Box className="characters__main mt-10">
          {characters ? (
            characters.map((character) => (
              <Link
                key={character.id}
                href={`characters/${character.id}`}
                className="mb-6"
              >
                <CharacterCart character={character} />
              </Link>
            ))
          ) : (
            <Box>Users Not Found!</Box>
          )}
        </Box>
        <Box className="flex justify-center mb-[50px] gap-5">
          <Pagination
            count={pages}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            color="primary"
            variant="outlined"
            size="large"
          />
        </Box>
      </Box>
    </Layout>
  );
};
export default CharactersPage;
