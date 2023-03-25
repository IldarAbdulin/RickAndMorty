import { FC, useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

import Layout from '@/components/layout/Layout';
import CustomInput from '@/components/ui/input/CustomInput';
import CustomSelect from '@/components/ui/select/CustomSelect';

const Locations: FC = () => {
  const [type, setType] = useState<string>('');
  const [dimension, setDimension] = useState<string>('');
  const [name, setName] = useState<string>('');
  return (
    <Layout title="Locations">
      <Box className="locations">
        <Box className="locations__image">
          <Image
            src="/assets/location.png"
            alt="location"
            width={300}
            height={200}
          />
        </Box>
        <Box className="mt-6 flex justify-center gap-14">
          <CustomInput
            className="w-[330px]"
            label="Filter by Name"
            value={name}
            setValue={setName}
          />
          <CustomSelect
            className="w-[240px]"
            inputLabel="Type"
            elemValue={type}
            setElemValue={setType}
          ></CustomSelect>
          <CustomSelect
            className="w-[240px]"
            inputLabel="Dimension"
            elemValue={dimension}
            setElemValue={setDimension}
          ></CustomSelect>
        </Box>
      </Box>
    </Layout>
  );
};
export default Locations;
