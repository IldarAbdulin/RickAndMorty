import { FC, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@mui/material';

import Header from './header/Header';
import Meta from '../seo/meta/Meta';
import { IMeta } from '../seo/meta/meta.interface';

const DynamicFooter = dynamic(() => import('./footer/Footer'), {
  ssr: false,
});

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, desc }) => {
  return (
    <Meta title={title} desc={desc}>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <DynamicFooter />
    </Meta>
  );
};
export default Layout;
