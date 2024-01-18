import { IEnterprise, NewEnterprise } from './enterprise.model';

export const sampleWithRequiredData: IEnterprise = {
  id: 24554,
  companyName: 'reoccur',
  businessRegisterNumber: 'palliate modulo commandment',
  uniqueIdentificationNumber: 'behind wetland',
  businessEmail: 'suggestion utterly bulldozer',
  businessPhone: 'jagged allot geez',
};

export const sampleWithPartialData: IEnterprise = {
  id: 2871,
  companyName: 'meaningfully gosh duh',
  businessRegisterNumber: 'generously',
  uniqueIdentificationNumber: 'affectionate trifling far',
  businessDomicile: 'unfortunately upwardly',
  businessEmail: 'on slowly',
  businessPhone: 'shareholder',
  country: 'COTE_IVOIRE',
  manager: 'inasmuch whereas oof',
  businessLogo: '../fake-data/blob/hipster.png',
  businessLogoContentType: 'unknown',
};

export const sampleWithFullData: IEnterprise = {
  id: 17218,
  companyName: 'unlawful',
  businessRegisterNumber: 'when',
  uniqueIdentificationNumber: 'bleak',
  businessDomicile: 'original er',
  businessEmail: 'afforest brr phooey',
  businessPhone: 'mmm',
  country: 'SENEGAL',
  city: 'Fullerton',
  manager: 'unless',
  businessLogo: '../fake-data/blob/hipster.png',
  businessLogoContentType: 'unknown',
  mapLocator: '../fake-data/blob/hipster.png',
  mapLocatorContentType: 'unknown',
};

export const sampleWithNewData: NewEnterprise = {
  companyName: 'violently',
  businessRegisterNumber: 'boomerang towards athwart',
  uniqueIdentificationNumber: 'apropos',
  businessEmail: 'correctly',
  businessPhone: 'coaxingly somber',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
