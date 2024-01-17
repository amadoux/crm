import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 4737,
};

export const sampleWithPartialData: IEmployee = {
  id: 31189,
  firstName: 'Hershel',
  phoneNumber: 'thickness when',
  hireDate: dayjs('2024-01-16T14:31'),
  commissionPct: 2570,
  address: 'intrepid',
  birthDate: dayjs('2024-01-17T00:45'),
  birthPlace: 'but entrench session',
  entryDate: dayjs('2024-01-16T20:26'),
  releaseDate: dayjs('2024-01-16T10:42'),
};

export const sampleWithFullData: IEmployee = {
  id: 11338,
  firstName: 'Josh',
  lastName: 'Bashirian',
  email: 'Mose6@yahoo.com',
  phoneNumber: 'after piercing boo',
  hireDate: dayjs('2024-01-17T05:26'),
  salary: 4950,
  commissionPct: 13422,
  address: 'raw',
  socialSecurityNumber: 'considerate',
  birthDate: dayjs('2024-01-17T00:05'),
  birthPlace: 'perk so',
  entryDate: dayjs('2024-01-16T21:14'),
  releaseDate: dayjs('2024-01-17T03:48'),
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
