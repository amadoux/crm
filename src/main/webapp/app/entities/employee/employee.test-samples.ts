import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 31870,
};

export const sampleWithPartialData: IEmployee = {
  id: 5544,
  lastName: 'Gusikowski',
  email: 'Rhea70@gmail.com',
  hireDate: dayjs('2024-01-16T12:49'),
  salary: 9856,
  address: 'recognize passionate isogloss',
  socialSecurityNumber: 'stimulus wassail',
  birthDate: dayjs('2024-01-17T01:46'),
  nationality: 'BELGIUM',
  birthPlace: 'across',
  entryDate: dayjs('2024-01-16T14:41'),
  releaseDate: dayjs('2024-01-16T17:12'),
};

export const sampleWithFullData: IEmployee = {
  id: 14176,
  firstName: 'Elijah',
  lastName: 'Hauck-Hodkiewicz',
  email: 'Arlene.Effertz90@hotmail.com',
  phoneNumber: 'boo finish',
  hireDate: dayjs('2024-01-16T12:35'),
  salary: 27695,
  commissionPct: 23289,
  address: 'prickly geez boo',
  socialSecurityNumber: 'psychoanalyst',
  birthDate: dayjs('2024-01-16T16:09'),
  nationality: 'FRENCH',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  birthPlace: 'noteworthy checking organizing',
  entryDate: dayjs('2024-01-16T16:47'),
  releaseDate: dayjs('2024-01-17T07:22'),
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
