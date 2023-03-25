import { FC, useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

import Layout from '@/components/layout/Layout';
import CustomInput from '@/components/ui/input/CustomInput';

const Episodes: FC = () => {
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
      </Box>
    </Layout>
  );
};
export default Episodes;
