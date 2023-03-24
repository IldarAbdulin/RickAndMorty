import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from '@/components/layout/Layout';

const Characters: FC = () => {
  return (
    <Layout title="Characters">
      <Box className="characters">
        <Typography component="h1">Characters</Typography>
      </Box>
    </Layout>
  );
};
export default Characters;
