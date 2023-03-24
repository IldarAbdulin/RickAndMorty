import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Container } from '@mui/material';
import CustomLink from '@/components/ui/link/Link';

const Header: FC = () => {
  return (
    <Box className="header">
      <Container maxWidth="lg">
        <Box className="header__main">
          <CustomLink href="/">
            <Image src="/assets/logo.png" alt="logo" width={45} height={45} />
          </CustomLink>
          <Box className="main__links">
            <CustomLink href="/">Characters</CustomLink>
            <CustomLink href="/locations">Locations</CustomLink>
            <CustomLink href="/episodes">Episodes</CustomLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Header;
