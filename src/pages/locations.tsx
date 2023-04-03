import { useState } from 'react';
import { NextPage } from 'next';
import Locations from '@/components/screens/locations/LocationsPage';
import { ILocationData } from '@/interfaces/locations.interface';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { getLocations } from '@/redux/slices/location-slice';

const LocationPage: NextPage = () => {
  const { locations, pages } = useAppSelector(
    ({ locationSlice }) => locationSlice
  );
  const [page, setPage] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [dimension, setDimension] = useState<string>('');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLocations({ page, name, type, dimension }));
  }, [dispatch, page, name, type, dimension]);
  return (
    <>
      <Locations
        locations={locations}
        pages={pages}
        page={page}
        setPage={setPage}
        name={name}
        setName={setName}
        type={type}
        setType={setType}
        dimension={dimension}
        setDimension={setDimension}
      />
    </>
  );
};

export default LocationPage;
