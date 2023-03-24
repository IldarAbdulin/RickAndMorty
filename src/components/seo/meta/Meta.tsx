import Head from 'next/head';
import React from 'react';
import { IMeta } from './meta.interface';

const getTitle = (title: string) => `${title} | Rick And Morty`;

const Meta: React.FC<React.PropsWithChildren<IMeta>> = ({
  children,
  title,
  desc,
}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        {desc ? (
          <>
            <meta name="desc" content={desc} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:desc" content={desc} />
          </>
        ) : (
          <>
            <meta name="robots" content="noindex, nofollow" />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
