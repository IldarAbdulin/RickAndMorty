import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import { ILocationDataById } from '@/interfaces/locations.interface';
import LocationCart from './LocationCart';

const LocationDetail: FC<ILocationDataById> = ({ location }) => {
  return (
    <Layout title={location.name}>
      <LocationCart location={location} />
    </Layout>
  );
};
export default LocationDetail;
