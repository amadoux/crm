import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 8580,
};

export const sampleWithPartialData: IEmployee = {
  id: 1919,
  firstName: 'Barry',
  lastName: 'Gislason',
  email: 'Baylee.Buckridge@gmail.com',
  phoneNumber: 'sophomore ah yet',
  hireDate: dayjs('2024-01-16T17:23'),
  salary: 14385,
};

export const sampleWithFullData: IEmployee = {
  id: 17825,
  firstName: 'Sherwood',
  lastName: 'Howell',
  email: 'Orland51@gmail.com',
  phoneNumber: 'submarine',
  hireDate: dayjs('2024-01-17T02:40'),
  salary: 3491,
  commissionPct: 28015,
  pays: 'COTE_IVOIRE',
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
