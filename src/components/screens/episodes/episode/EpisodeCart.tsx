import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { IEpisodeDataById } from '@/interfaces/epidodes.interface';

const EpisodeCart: FC<IEpisodeDataById> = ({ episode }) => {
  return (
    <Box className="mb-4 w-[260px] h-[130px] flex items-center justify-center border rounded shadow-lg text-center">
      <Box>
        <Typography component="h5" className="text-[19px] font-bold mt-1">
          {episode.name}
        </Typography>
        <Typography
          component="p"
          className="text-[14px] text-gray-500 font-normal mt-1 mb-1"
        >
          {episode.air_date}
        </Typography>
        <Typography
          component="p"
          className="text-[14px] text-gray-600 font-bold tracking-wider mb-1"
        >
          {episode.episode}
        </Typography>
      </Box>
    </Box>
  );
};
export default EpisodeCart;
