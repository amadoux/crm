import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 9881,
  email: 'Cayla_Gusikowski9@hotmail.com',
  phoneNumber: 'blissful',
  identityCard: 'intrepid',
};

export const sampleWithPartialData: IEmployee = {
  id: 3553,
  firstName: 'Alia',
  email: 'Mose6@yahoo.com',
  phoneNumber: 'after piercing boo',
  identityCard: 'unlike',
  nationality: 'MALI',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  companyName: 'unfolded clot bogus',
  cityAgency: 'enthusiastically',
  residenceCity: 'release of detour',
  address: 'harmonica',
  socialSecurityNumber: 'strictly gosh hark',
  birthDate: dayjs('2024-01-17T07:00'),
  entryDate: dayjs('2024-01-17T03:15'),
  workstation: 'till',
  descriptionWorkstation: 'alongside',
  employedManager: 'as reproachfully end',
  numberHours: 'spotless',
  averageHourlyCost: 'thongs sparkling',
  salaryType: 'NON_EXECUTIVE_SALARIED',
};

export const sampleWithFullData: IEmployee = {
  id: 1711,
  firstName: 'Luz',
  lastName: 'Kuvalis',
  email: 'Jarrell_Bode@gmail.com',
  phoneNumber: 'meh',
  identityCard: 'regarding',
  dateInspiration: 'maker',
  nationality: 'CAMEROON',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  companyName: 'about now',
  typeEmployed: 'MARKETER',
  cityAgency: 'after boohoo during',
  residenceCity: 'limit',
  address: 'meaningfully walrus',
  socialSecurityNumber: 'exact yeast than',
  birthDate: dayjs('2024-01-17T07:51'),
  birthPlace: 'pounding dimly',
  entryDate: dayjs('2024-01-16T12:32'),
  releaseDate: dayjs('2024-01-16T12:57'),
  workstation: 'scrunch except snappy',
  descriptionWorkstation: 'wherever zowie',
  level: 'D',
  coefficient: 31780,
  employedManager: 'about skull',
  numberHours: 'concerning derby as',
  averageHourlyCost: 'royal',
  monthlyGrossAmount: 10232,
  commissionAmount: 9144,
  contractType: 'APPRENTICE',
  salaryType: 'NON_EXECUTIVE_SALARIED',
  hireDate: dayjs('2024-01-17T05:21'),
};

export const sampleWithNewData: NewEmployee = {
  email: 'Bria.Wiza@yahoo.com',
  phoneNumber: 'amidst dismal subdue',
  identityCard: 'viscose disincentivize',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
