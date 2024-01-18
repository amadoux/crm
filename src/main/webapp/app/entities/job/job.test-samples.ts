import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 23309,
};

export const sampleWithPartialData: IJob = {
  id: 28500,
  minSalary: 19956,
};

export const sampleWithFullData: IJob = {
  id: 19312,
  jobTitle: 'Forward Division Representative',
  minSalary: 26855,
  maxSalary: 28939,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
