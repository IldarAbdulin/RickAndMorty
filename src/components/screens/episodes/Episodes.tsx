import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Layout from '@/components/layout/Layout';

const Episodes: FC = () => {
  return (
    <Layout title="Episodes">
      <Box className="episodes">
        <Typography component="h1">Episodes</Typography>
      </Box>
    </Layout>
  );
};
export default Episodes;
