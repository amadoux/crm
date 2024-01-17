import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 6382,
};

export const sampleWithPartialData: ILocation = {
  id: 20036,
  streetAddress: 'upon prejudice',
  city: 'Bechtelarchester',
  stateProvince: 'snack',
};

export const sampleWithFullData: ILocation = {
  id: 6105,
  streetAddress: 'meanwhile easy past',
  postalCode: 'ha',
  city: 'East Jennyferhaven',
  stateProvince: 'triumphantly often vice',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
