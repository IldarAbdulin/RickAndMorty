import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ILocationDataById } from '@/interfaces/locations.interface';

const LocationCart: FC<ILocationDataById> = ({ location }) => {
  return (
    <Box className="mb-4 w-[260px] h-[130px] flex items-center justify-center border rounded shadow-lg text-center">
      <Box>
        <Typography component="h5" className="text-[19px] font-bold mt-1">
          {location.dimension}
        </Typography>
        <Typography
          component="p"
          className="text-[14px] text-gray-500 font-normal mb-1"
        >
          {location.type}
        </Typography>
      </Box>
    </Box>
  );
};
export default LocationCart;
