import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 22357,
};

export const sampleWithPartialData: IJobHistory = {
  id: 9349,
  endDate: dayjs('2024-01-17T04:09'),
  language: 'ENGLISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 14833,
  startDate: dayjs('2024-01-17T08:16'),
  endDate: dayjs('2024-01-17T07:23'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
