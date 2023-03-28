import { FC } from 'react';
import Layout from '@/components/layout/Layout';
import { ILocationDataById } from '@/interfaces/locations.interface';

const LocationDetail: FC<ILocationDataById> = ({ location }) => {
  return (
    <Layout title={location.name}>
      <h1>{location.type}</h1>
    </Layout>
  );
};
export default LocationDetail;
