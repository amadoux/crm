import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 16482,
  email: 'Bette.Hudson39@yahoo.com',
  phoneNumber: 'along',
  identityCard: 'blissful',
};

export const sampleWithPartialData: IEmployee = {
  id: 8631,
  firstName: 'Justine',
  email: 'Davion_Hagenes27@gmail.com',
  phoneNumber: 'careful',
  identityCard: 'uh-huh',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  cityAgency: 'likewise alive conductor',
  residenceCity: 'to',
  birthDate: dayjs('2024-01-16T17:01'),
  birthPlace: 'prickly geez boo',
  entryDate: dayjs('2024-01-17T07:31'),
  level: 'E',
  hireDate: dayjs('2024-01-16T20:20'),
  salary: 17537,
  commissionPct: 8580,
};

export const sampleWithFullData: IEmployee = {
  id: 15279,
  firstName: 'Cloyd',
  lastName: 'Rogahn',
  email: 'Aron73@yahoo.com',
  phoneNumber: 'deflate furthermore',
  identityCard: 'who strictly',
  dateInspiration: 'out whoa octave',
  nationality: 'SENEGAL',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  companyName: 'speaking unnaturally cluster',
  typeEmployed: 'MARKETER',
  cityAgency: 'end woozy syndicate',
  residenceCity: 'unexpectedly jiggle joyfully',
  address: 'or defer maker',
  socialSecurityNumber: 'inferior',
  birthDate: dayjs('2024-01-17T09:15'),
  birthPlace: 'gracefully neatly beneath',
  entryDate: dayjs('2024-01-17T05:24'),
  releaseDate: dayjs('2024-01-17T04:23'),
  level: 'D',
  hireDate: dayjs('2024-01-16T13:10'),
  salary: 3901,
  commissionPct: 28719,
};

export const sampleWithNewData: NewEmployee = {
  email: 'Zola_Crooks@gmail.com',
  phoneNumber: 'gurgle',
  identityCard: 'feint',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
