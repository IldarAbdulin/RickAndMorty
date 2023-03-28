import { Box, CircularProgress } from '@mui/material';

const CustomLoader = () => {
  return (
    <Box className="flex justify-center h-[100vh]">
      <CircularProgress color="warning" />
    </Box>
  );
};
export default CustomLoader;
