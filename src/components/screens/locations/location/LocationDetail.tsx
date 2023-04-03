import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Layout from '@/components/layout/Layout';
import { Box, Typography } from '@mui/material';
import { ILocationDataById } from '@/interfaces/locations.interface';
import { ICharacter } from '@/interfaces/characters.interface';
import Link from 'next/link';

const LocationDetail: FC<ILocationDataById> = ({ location }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const [residents, setResidents] = useState<ICharacter[]>([]);

  useEffect(() => {
    location.residents &&
      location.residents.map(async (resident) => {
        const { data } = await axios.get(resident);
        setResidents([data]);
      });
  }, [location]);
  console.log(residents);

  return (
    <Layout title={location.name}>
      <Box>
        <button
          onClick={goBack}
          className="mt-2 text-[18px] font-bold flex items-center gap-2"
        >
          <ArrowBackIcon /> Go Back
        </button>
      </Box>
      <Typography className="text-center text-[#081F32] text-[36px]">
        {location.name}
      </Typography>
      <Box className="flex justify-around items-center">
        <Box className="py-2 px-1">
          <Typography className="text-[#081F32] text-[16px] font-bold">
            Type
          </Typography>
          <Typography className="text-[#6E798C] text-[14px]">
            {location.type}
          </Typography>
        </Box>
        <Box className="py-2 px-1">
          <Typography className="text-[#081F32] text-[16px] font-bold">
            Dimension
          </Typography>
          <Typography className="text-[#6E798C] text-[14px]">
            {location.dimension}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography className="my-3 text-[#8E8E93] text-[20px] font-medium">
          Residents
        </Typography>
        <Box className="flex justify-between flex-wrap">
          {residents &&
            residents.map((resident) => (
              <Link href={`../characters/${resident.id}`} key={resident.id}>
                <Box className="w-[255px] border border-gray-300 shadow-lg rounded my-5">
                  <Image
                    src={resident.image}
                    alt={resident.name}
                    width={255}
                    height={150}
                  />
                  <Typography
                    component="h5"
                    className="text-[19px] font-bold ml-5 mt-1"
                  >
                    {resident.name}
                  </Typography>
                  <Typography
                    component="p"
                    className="text-[14px] text-gray-500 font-normal ml-5 mb-1"
                  >
                    {resident.species}
                  </Typography>
                </Box>
              </Link>
            ))}
        </Box>
      </Box>
    </Layout>
  );
};
export default LocationDetail;
