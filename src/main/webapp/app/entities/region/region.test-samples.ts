import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 25176,
};

export const sampleWithPartialData: IRegion = {
  id: 15289,
  regionName: 'loosely what',
};

export const sampleWithFullData: IRegion = {
  id: 1919,
  regionName: 'potentially extra-small',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
