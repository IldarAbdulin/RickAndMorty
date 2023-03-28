import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getLocationById } from '@/redux/slices/location-slice';
import LocationDetail from '@/components/screens/locations/location/LocationDetail';

const LocationSinglePage = () => {
  const router = useRouter();
  const { query } = router;

  const { location } = useAppSelector(({ locationSlice }) => locationSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLocationById(Number(query.id)));
  }, [router, dispatch]);
  return (
    <>
      <LocationDetail location={location} />
    </>
  );
};
export default LocationSinglePage;
