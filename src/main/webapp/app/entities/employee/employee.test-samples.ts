import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 4737,
  identityCard: 'certainly',
};

export const sampleWithPartialData: IEmployee = {
  id: 27117,
  lastName: 'Turcotte',
  email: 'Austin67@hotmail.com',
  phoneNumber: 'impel distinct in',
  identityCard: 'unless',
  dateInspiration: 'nervously',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  companyName: 'across',
  typeEmployed: 'CONSULTANT',
  hireDate: dayjs('2024-01-16T17:12'),
  salary: 14176,
  commissionPct: 9813,
};

export const sampleWithFullData: IEmployee = {
  id: 31711,
  firstName: 'Eugenia',
  lastName: 'Block',
  email: 'Hazle_Stokes@hotmail.com',
  phoneNumber: 'boo finish',
  identityCard: 'second if underspend',
  dateInspiration: 'diner legging stiff',
  nationality: 'CAMEROON',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  companyName: 'fuse failing',
  typeEmployed: 'SALARY',
  hireDate: dayjs('2024-01-17T00:08'),
  salary: 30037,
  commissionPct: 16799,
};

export const sampleWithNewData: NewEmployee = {
  identityCard: 'dental bump ah',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
