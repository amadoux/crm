import { IEnterprise, NewEnterprise } from './enterprise.model';

export const sampleWithRequiredData: IEnterprise = {
  id: 26605,
  companyName: 'alight strike among',
  businessRegisterNumber: 'till bomb pro',
  uniqueIdentificationNumber: 'upbeat',
  businessEmail: '1#@x#N(L.&O',
  businessPhone: 'record furthermore',
};

export const sampleWithPartialData: IEnterprise = {
  id: 1337,
  companyName: 'the or',
  businessRegisterNumber: 'faithfully rash quizzically',
  uniqueIdentificationNumber: 'forenenst limping suit',
  businessEmail: 'd@*Jg;H".F9&k',
  businessPhone: 'notwithstanding violently',
  city: 'Rochester',
  mapLocator: '../fake-data/blob/hipster.png',
  mapLocatorContentType: 'unknown',
};

export const sampleWithFullData: IEnterprise = {
  id: 32197,
  companyName: 'repurpose frail',
  businessRegisterNumber: 'aboard bleak peek',
  uniqueIdentificationNumber: 'er versus',
  businessDomicile: 'brr',
  businessEmail: 'E;/nu@!.;yc!',
  businessPhone: 'mmm yesterday prairie',
  country: 'SENEGAL',
  city: 'Wittingland',
  manager: 'oh tectonics to',
  businessLogo: '../fake-data/blob/hipster.png',
  businessLogoContentType: 'unknown',
  mapLocator: '../fake-data/blob/hipster.png',
  mapLocatorContentType: 'unknown',
};

export const sampleWithNewData: NewEnterprise = {
  companyName: 'amidst',
  businessRegisterNumber: 'star hermit sizzling',
  uniqueIdentificationNumber: 'gosh scarily',
  businessEmail: '3[,@~>3DB.wdO.',
  businessPhone: 'obtrude whoa boohoo',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
