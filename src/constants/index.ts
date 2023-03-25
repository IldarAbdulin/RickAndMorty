import { IGenders, ISpecieses, IStatus } from '@/interfaces';

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
  { id: 2, title: 'unknown' },
];
