import { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';

import Layout from '@/components/layout/Layout';
import { ICharacterDataById } from '@/interfaces/characters.interface';
import Link from 'next/link';

const CharacterDetail: FC<ICharacterDataById> = ({ character }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <Layout title={character.name}>
      <button
        onClick={goBack}
        className="mt-2 text-[18px] font-bold flex items-center gap-2"
      >
        <ArrowBackIcon /> Go Back
      </button>
      <Box className="flex flex-col items-center my-10">
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className="rounded-full"
        />
        <Typography component="h1" className="text-[#081F32] text-[40px] mt-3">
          {character.name}
        </Typography>
      </Box>
      <Box className="flex justify-around">
        <Box className="mb-10">
          <Typography className="text-[#8E8E93] text-[20px] mb-5">
            Information
          </Typography>
          <Box className="w-[415px]">
            <Box className="py-2 px-1 shadow-lg">
              <Typography className="text-[#081F32] text-[16px] font-bold">
                Gender
              </Typography>
              <Typography className="text-[#6E798C] text-[14px]">
                {character.gender}
              </Typography>
            </Box>
            <hr />
            <Box className="py-2 px-1 shadow-lg">
              <Typography className="text-[#081F32] text-[16px] font-bold">
                Status
              </Typography>
              <Typography className="text-[#6E798C] text-[14px]">
                {character.status}
              </Typography>
            </Box>
            <hr />
            <Box className="py-2 px-1 shadow-lg">
              <Typography className="text-[#081F32] text-[16px] font-bold">
                Specie
              </Typography>
              <Typography className="text-[#6E798C] text-[14px]">
                {character.species}
              </Typography>
            </Box>
            <hr />
            <Box className="py-2 px-1 shadow-lg">
              <Typography className="text-[#081F32] text-[16px] font-bold">
                Origin
              </Typography>
              <Typography className="text-[#6E798C] text-[14px]">
                {character.origin && character.origin.name}
              </Typography>
            </Box>
            <hr />
            <Box className="py-2 px-1 shadow-lg">
              <Typography className="text-[#081F32] text-[16px] font-bold">
                Type
              </Typography>
              <Typography className="text-[#6E798C] text-[14px]">
                unknown
              </Typography>
            </Box>
            <hr />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
export default CharacterDetail;
