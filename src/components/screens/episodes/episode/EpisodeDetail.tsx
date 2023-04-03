import { FC } from 'react';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';

import Layout from '@/components/layout/Layout';
import { IEpisodeDataById } from '@/interfaces/epidodes.interface';

const EpisodesDetail: FC<IEpisodeDataById> = ({ episode }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
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
      </Box>
    </Layout>
  );
};
export default EpisodesDetail;
