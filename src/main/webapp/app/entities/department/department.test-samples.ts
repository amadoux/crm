import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 29575,
  departmentName: 'wonderfully',
};

export const sampleWithPartialData: IDepartment = {
  id: 23960,
  departmentName: 'for unlined brr',
};

export const sampleWithFullData: IDepartment = {
  id: 31747,
  departmentName: 'a',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'wind',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
