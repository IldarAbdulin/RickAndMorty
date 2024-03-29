import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, MenuItem, Pagination } from '@mui/material';

import Layout from '@/components/layout/Layout';
import CustomInput from '@/components/ui/input/CustomInput';
import CustomSelect from '@/components/ui/select/CustomSelect';
import { ILocationData } from '@/interfaces/locations.interface';
import LocationCart from './location/LocationCart';
import CustomButton from '@/components/ui/button/CustomButton';
import { locationsDimensions, locationsTypes } from '@/constants';

const Locations: FC<ILocationData> = ({
  locations,
  pages,
  page,
  setPage,
  name,
  setName,
  type,
  setType,
  dimension,
  setDimension,
}) => {
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
          >
            {locationsTypes.map((type) => (
              <MenuItem key={type.id} value={type.type}>
                {type.type}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomSelect
            className="w-[240px]"
            inputLabel="Dimension"
            elemValue={dimension}
            setElemValue={setDimension}
          >
            {locationsDimensions.map((dimension) => (
              <MenuItem key={dimension.id} value={dimension.dimension}>
                {dimension.dimension}
              </MenuItem>
            ))}
          </CustomSelect>
        </Box>
        <Box className="my-6 flex flex-wrap justify-between">
          {locations ? (
            locations.map((location) => (
              <Link href={`locations/${location.id}`} key={location.id}>
                <LocationCart location={location} />
              </Link>
            ))
          ) : (
            <Box>Locations is not defind!</Box>
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
export default Locations;
