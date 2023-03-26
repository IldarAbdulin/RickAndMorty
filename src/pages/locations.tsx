import { GetStaticProps, NextPage } from 'next';

import { LocationsService } from '@/services/locations.service';
import Locations from '@/components/screens/locations/LocationsPage';
import { ILocationData } from '@/interfaces/locations.interface';

const LocationPage: NextPage<ILocationData> = ({ locations }) => {
  return (
    <>
      <Locations locations={locations} />
    </>
  );
};

export const getServerSideProps: GetStaticProps<ILocationData> = async () => {
  const locations = await LocationsService.getAll();
  return {
    props: { locations },
  };
};

export default LocationPage;
