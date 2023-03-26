import { FC } from 'react';
import Image from 'next/image';
import { ICharacterDataById } from '@/interfaces/characters.interface';
import { Box, Typography } from '@mui/material';

const CharacterCart: FC<ICharacterDataById> = ({ character }) => {
  return (
    <Box className="w-[255px] border border-gray-300 shadow-lg rounded">
      <Image
        src={character.image}
        alt={character.name}
        width={255}
        height={150}
      />
      <Typography component="h5" className="text-[19px] font-bold ml-5 mt-1">
        {character.name}
      </Typography>
      <Typography
        component="p"
        className="text-[14px] text-gray-500 font-normal ml-5 mb-1"
      >
        {character.species}
      </Typography>
    </Box>
  );
};
export default CharacterCart;
