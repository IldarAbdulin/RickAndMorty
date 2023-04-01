import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Pagination } from '@mui/material';

import Layout from '@/components/layout/Layout';
import CustomInput from '@/components/ui/input/CustomInput';
import { IEpisodeData } from '@/interfaces/epidodes.interface';
import EpisodeCart from './episode/EpisodeCart';

const Episodes: FC<IEpisodeData> = ({ episodes, page, pages, setPage }) => {
  const [name, setName] = useState<string>('');
  return (
    <Layout title="Episodes">
      <Box className="episodes">
        <Box className="episodes__image">
          <Image
            src="/assets/episodes.png"
            alt="episodes"
            width={250}
            height={200}
          />
        </Box>
        <Box className="mt-6 flex justify-center">
          <CustomInput
            label="Filter by name or episode (ex. S01 or S01E02)"
            value={name}
            setValue={setName}
            className="w-[60%]"
          />
        </Box>
        <Box className="my-6 flex flex-wrap justify-between">
          {episodes ? (
            episodes.map((episode) => (
              <Link href={`episodes/${episode.id}`} key={episode.id}>
                <EpisodeCart episode={episode} />
              </Link>
            ))
          ) : (
            <Box>Episodes is not defind!</Box>
          )}
        </Box>
        <Box className="flex justify-center mb-[50px] gap-5">
          <Pagination
            count={pages}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            color="primary"
            variant="outlined"
            size="large"
          />
        </Box>
      </Box>
    </Layout>
  );
};
export default Episodes;
