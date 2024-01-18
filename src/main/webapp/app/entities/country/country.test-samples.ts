import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 305,
};

export const sampleWithPartialData: ICountry = {
  id: 13444,
};

export const sampleWithFullData: ICountry = {
  id: 24090,
  countryName: 'what chivalry',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
