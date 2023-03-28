import { FC, PropsWithChildren } from 'react';
import { Button } from '@mui/material';

const CustomButton: FC<PropsWithChildren> = ({ children }) => {
  return <Button variant="outlined">{children}</Button>;
};
export default CustomButton;
