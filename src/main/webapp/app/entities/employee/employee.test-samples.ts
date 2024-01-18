import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 2550,
  email: 'Elijah17@hotmail.com',
  phoneNumber: 'between intrepid neatly',
  identityCard: 'submarine',
};

export const sampleWithPartialData: IEmployee = {
  id: 6957,
  firstName: 'Ryleigh',
  lastName: 'Kuhn',
  email: 'Sydni29@hotmail.com',
  phoneNumber: 'hence',
  identityCard: 'silently likewise',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  companyName: 'perk so',
  typeEmployed: 'SALARY',
  socialSecurityNumber: 'legging',
  birthPlace: 'concrete symptomize',
  entryDate: dayjs('2024-01-17T01:05'),
  workstation: 'mope',
  descriptionWorkstation: 'impractical whereas',
  level: 'E',
  coefficient: 21674,
  employedManager: 'ah',
  monthlyGrossAmount: 7837,
  commissionAmount: 16468,
  salaryType: 'EXECUTIVE_SALARIED',
  hireDate: dayjs('2024-01-16T19:06'),
  salary: 3941,
  commissionPct: 19885,
};

export const sampleWithFullData: IEmployee = {
  id: 14202,
  firstName: 'Marietta',
  lastName: 'Wolff',
  email: 'Jonathon.Bailey87@yahoo.com',
  phoneNumber: 'of if',
  identityCard: 'snuggle',
  dateInspiration: 'joshingly shadowbox',
  nationality: 'COTE_IVOIRE',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  companyName: 'prejudice lest tale',
  typeEmployed: 'CONSULTANT',
  cityAgency: 'arithmetic likewise',
  residenceCity: 'incidentally inflict monitor',
  address: 'underneath',
  socialSecurityNumber: 'carjack restfully',
  birthDate: dayjs('2024-01-17T04:17'),
  birthPlace: 'adoption feint',
  entryDate: dayjs('2024-01-17T04:20'),
  releaseDate: dayjs('2024-01-16T19:21'),
  workstation: 'meh zowie amidst',
  descriptionWorkstation: 'around united along',
  level: 'D',
  coefficient: 29112,
  employedManager: 'ick urge despite',
  numberHours: 'hood',
  averageHourlyCost: 'aw into sans',
  monthlyGrossAmount: 18016,
  commissionAmount: 14870,
  contractType: 'INTERN',
  salaryType: 'EXECUTIVE_SALARIED',
  hireDate: dayjs('2024-01-17T01:09'),
  salary: 32655,
  commissionPct: 31417,
};

export const sampleWithNewData: NewEmployee = {
  email: 'Daniella50@yahoo.com',
  phoneNumber: 'mister frightening',
  identityCard: 'instead',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
