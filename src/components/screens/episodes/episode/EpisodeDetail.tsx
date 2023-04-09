import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

import Layout from '@/components/layout/Layout';
import { IEpisodeDataById } from '@/interfaces/epidodes.interface';
import { ICharacter } from '@/interfaces/characters.interface';

let arr: ICharacter[] = [];

const EpisodesDetail: FC<IEpisodeDataById> = ({ episode }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const getAllCharacters = () => {
    episode.characters &&
      episode.characters.map(async (character) => {
        const { data } = await axios.get(character);
        arr.push(data);
        setCharacters([...characters, ...arr]);
      });
  };

  useEffect(() => {
    if (!arr.length) {
      getAllCharacters();
    } else {
      arr = [];
    }
  }, [episode]);

  return (
    <Layout title={episode.name}>
      <Box>
        <button
          onClick={goBack}
          className="mt-2 text-[18px] font-bold flex items-center gap-2"
        >
          <ArrowBackIcon /> Go Back
        </button>
      </Box>
      <Typography className="text-center text-[#081F32] text-[36px]">
        {episode.name}
      </Typography>
      <Box className="flex justify-around items-center">
        <Box className="py-2 px-1">
          <Typography className="text-[#081F32] text-[16px] font-bold">
            Episode
          </Typography>
          <Typography className="text-[#6E798C] text-[14px]">
            {episode.episode}
          </Typography>
        </Box>
        <Box className="py-2 px-1">
          <Typography className="text-[#081F32] text-[16px] font-bold">
            Date
          </Typography>
          <Typography className="text-[#6E798C] text-[14px]">
            {episode.air_date}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography className="my-3 text-[#8E8E93] text-[20px] font-medium">
          Cast
        </Typography>
        <Box className="flex justify-between flex-wrap">
          {episode &&
            characters.map((character) => (
              <Link href={`../characters/${character.id}`} key={character.id}>
                <Box className="w-[255px] border border-gray-300 shadow-lg rounded my-5">
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={255}
                    height={150}
                  />
                  <Typography
                    component="h5"
                    className="text-[19px] font-bold ml-5 mt-1"
                  >
                    {character.name}
                  </Typography>
                  <Typography
                    component="p"
                    className="text-[14px] text-gray-500 font-normal ml-5 mb-1"
                  >
                    {character.species}
                  </Typography>
                </Box>
              </Link>
            ))}
        </Box>
      </Box>
    </Layout>
  );
};
export default EpisodesDetail;
