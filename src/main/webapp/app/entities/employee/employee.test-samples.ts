import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 6394,
  identityCard: 'how',
};

export const sampleWithPartialData: IEmployee = {
  id: 2550,
  firstName: 'Elijah',
  email: 'Rhea70@gmail.com',
  phoneNumber: 'selfishly joyously although',
  identityCard: 'entrench',
  dateInspiration: 'yippee',
  nationality: 'MALI',
  companyName: 'lack oof',
  hireDate: dayjs('2024-01-17T01:58'),
  salary: 12341,
  commissionPct: 2607,
};

export const sampleWithFullData: IEmployee = {
  id: 13703,
  firstName: 'Coy',
  lastName: 'Senger',
  email: 'Jennifer.Mueller29@gmail.com',
  phoneNumber: 'hence',
  identityCard: 'silently likewise',
  dateInspiration: 'perk so',
  nationality: 'COTE_IVOIRE',
  uploadIdentityCard: '../fake-data/blob/hipster.png',
  uploadIdentityCardContentType: 'unknown',
  companyName: 'legging',
  hireDate: dayjs('2024-01-16T23:24'),
  salary: 9499,
  commissionPct: 24109,
};

export const sampleWithNewData: NewEmployee = {
  identityCard: 'deflate furthermore',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
