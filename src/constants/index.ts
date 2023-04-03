import {
  IGenders,
  ILocationDimensions,
  ILocationTypes,
  ISpecieses,
  IStatus,
} from '@/interfaces/selects.interface';

export const statuses: IStatus[] = [
  {
    id: 1,
    title: 'alive',
  },
  {
    id: 2,
    title: 'unknown',
  },
  {
    id: 3,
    title: 'dead ',
  },
];

export const genders: IGenders[] = [
  {
    id: 1,
    title: 'female',
  },
  {
    id: 2,
    title: 'male',
  },
  {
    id: 3,
    title: 'genderless ',
  },
  {
    id: 4,
    title: 'unknown ',
  },
];

export const specieses: ISpecieses[] = [
  { id: 1, title: 'Human' },
  { id: 2, title: 'Alien' },
  { id: 3, title: 'Humanoid' },
  { id: 4, title: 'unknown' },
];

export const locationsTypes: ILocationTypes[] = [
  { id: 1, type: 'Planet' },
  { id: 2, type: 'Cluster' },
  { id: 3, type: 'Space station' },
  { id: 4, type: 'Microverse' },
  { id: 5, type: 'TV' },
  { id: 6, type: 'Resort' },
  { id: 7, type: 'Fantasy town' },
  { id: 8, type: 'Dream' },
  { id: 9, type: 'Dimension' },
  { id: 10, type: 'Menagerie' },
  { id: 11, type: 'Game' },
  { id: 12, type: 'Daycare' },
  { id: 13, type: 'Dwarf planet' },
  { id: 14, type: 'Teenyverse' },
  { id: 15, type: 'Box' },
  { id: 16, type: 'Spacecraft' },
  { id: 17, type: 'Machine' },
  { id: 18, type: 'Arcade' },
  { id: 19, type: 'Spa' },
  { id: 20, type: 'unknown' },
];

export const locationsDimensions: ILocationDimensions[] = [
  { id: 1, dimension: 'Dimension C-137' },
  { id: 2, dimension: 'Post-Apocalyptic Dimension' },
  { id: 3, dimension: 'Replacement Dimension' },
  { id: 4, dimension: 'Cronenberg Dimension' },
  { id: 5, dimension: 'Fantasy Dimension' },
  { id: 6, dimension: 'Dimension 5-126' },
  { id: 7, dimension: 'Testicle Monster Dimension' },
  { id: 8, dimension: 'Cromulon Dimension' },
  { id: 9, dimension: 'Evil Rick`s Target Dimension' },
  { id: 10, dimension: 'Dimension C-500A' },
  { id: 11, dimension: 'Dimension K-83' },
  { id: 12, dimension: 'Pizza Dimension' },
  { id: 13, dimension: 'Merged Dimension' },
  { id: 14, dimension: 'Wasp Dimension' },
  { id: 15, dimension: 'Dimension D716' },
  { id: 16, dimension: 'Dimension D716-B' },
  { id: 17, dimension: 'Magic Dimension' },
  { id: 18, dimension: 'Dimension D-99' },
  { id: 19, dimension: 'unknown' },
];
