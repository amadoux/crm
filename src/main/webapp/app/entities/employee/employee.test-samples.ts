import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 1108,
};

export const sampleWithPartialData: IEmployee = {
  id: 31870,
  firstName: 'Monroe',
  lastName: 'Brakus',
  email: 'Reta16@yahoo.com',
  phoneNumber: 'blah scarily',
  hireDate: dayjs('2024-01-16T12:49'),
  salary: 9856,
  commissionPct: 22002,
};

export const sampleWithFullData: IEmployee = {
  id: 24476,
  firstName: 'Raven',
  lastName: 'Harber',
  email: 'Michelle.Powlowski-Kessler38@yahoo.com',
  phoneNumber: 'but entrench session',
  hireDate: dayjs('2024-01-16T20:26'),
  salary: 31929,
  commissionPct: 11338,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
