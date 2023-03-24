import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from '@/components/layout/Layout';

const Locations: FC = () => {
  return (
    <Layout title="Locations">
      <Box className="locations">
        <Typography component="h1">Locations</Typography>
      </Box>
    </Layout>
  );
};
export default Locations;
