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
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLocations(page));
  }, [dispatch, page, setPage]);
  return (
    <>
      <Locations
        locations={locations}
        pages={pages}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default LocationPage;
