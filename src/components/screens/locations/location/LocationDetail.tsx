import { FC } from 'react';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Layout from '@/components/layout/Layout';
import { Box, Typography } from '@mui/material';
import { ILocationDataById } from '@/interfaces/locations.interface';

const LocationDetail: FC<ILocationDataById> = ({ location }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <Layout title={location.name}>
      <Box>
        <button
          onClick={goBack}
          className="mt-2 text-[18px] font-bold flex items-center gap-2"
        >
          <ArrowBackIcon /> Go Back
        </button>
      </Box>
      <Typography className="text-center text-[#081F32] text-[36px]">
        {location.name}
      </Typography>
      <Box className="flex justify-around items-center">
        <Box className="py-2 px-1">
          <Typography className="text-[#081F32] text-[16px] font-bold">
            Gender
          </Typography>
          <Typography className="text-[#6E798C] text-[14px]">
            {location.type}
          </Typography>
        </Box>
        <Box className="py-2 px-1">
          <Typography className="text-[#081F32] text-[16px] font-bold">
            Gender
          </Typography>
          <Typography className="text-[#6E798C] text-[14px]">
            {location.dimension}
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};
export default LocationDetail;
