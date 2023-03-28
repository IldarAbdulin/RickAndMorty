import { NextPage } from 'next';
import Locations from '@/components/screens/locations/LocationsPage';
import { ILocationData } from '@/interfaces/locations.interface';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { useEffect } from 'react';
import { getLocations } from '@/redux/slices/location-slice';

const LocationPage: NextPage = () => {
  const { locations } = useAppSelector(({ locationSlice }) => locationSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);
  return (
    <>
      <Locations locations={locations} />
    </>
  );
};

export default LocationPage;
