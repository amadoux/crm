import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 13842,
  email: 'Vance7@gmail.com',
  phoneNumber: 'while',
};

export const sampleWithPartialData: IEmployee = {
  id: 8631,
  firstName: 'Justine',
  email: 'Davion_Hagenes27@gmail.com',
  phoneNumber: 'careful',
  commissionPct: 1227,
  address: 'prow likewise alive',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  releaseDate: dayjs('2024-01-16T13:44'),
  cityAgency: 'kindly',
  descriptionWorkstation: 'raw',
  level: 'B',
  coefficient: 24293,
  numberHours: 'jealously perk so',
  averageHourlyCost: 'ratify noteworthy',
  monthlyGrossAmount: 26304,
  commissionAmount: 4536,
};

export const sampleWithFullData: IEmployee = {
  id: 19869,
  firstName: 'Lexus',
  lastName: 'Metz',
  email: 'Camille23@yahoo.com',
  phoneNumber: 'who strictly',
  hireDate: dayjs('2024-01-16T18:00'),
  salary: 6167,
  commissionPct: 4119,
  address: 'utterly',
  socialSecurityNumber: 'anti weatherise',
  birthDate: dayjs('2024-01-16T21:45'),
  nationality: 'ITALY',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  birthPlace: 'besides',
  entryDate: dayjs('2024-01-17T07:43'),
  releaseDate: dayjs('2024-01-16T13:18'),
  cityAgency: 'disinvest nor er',
  residenceCity: 'syndicate loudly listen',
  workstation: 'joyfully eventually',
  descriptionWorkstation: 'defer maker',
  level: 'B',
  coefficient: 11391,
  employedManager: 'throughout gracefully',
  numberHours: 'after boohoo during',
  averageHourlyCost: 'limit',
  monthlyGrossAmount: 11321,
  commissionAmount: 27253,
};

export const sampleWithNewData: NewEmployee = {
  email: 'Albert47@hotmail.com',
  phoneNumber: 'ha exact yeast',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
