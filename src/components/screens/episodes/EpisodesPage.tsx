import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/material';

import Layout from '@/components/layout/Layout';
import CustomInput from '@/components/ui/input/CustomInput';
import { IEpisodeData } from '@/interfaces/epidodes.interface';
import EpisodeCart from './episode/EpisodeCart';
import CustomButton from '@/components/ui/button/CustomButton';

const Episodes: FC<IEpisodeData> = ({ episodes }) => {
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
        <Box className="flex justify-center mb-[50px]">
          <CustomButton>Load more</CustomButton>
        </Box>
      </Box>
    </Layout>
  );
};
export default Episodes;
