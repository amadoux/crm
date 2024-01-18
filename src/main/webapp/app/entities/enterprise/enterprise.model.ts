import { Pays } from 'app/entities/enumerations/pays.model';

export interface IEnterprise {
  id: number;
  companyName?: string | null;
  businessRegisterNumber?: string | null;
  uniqueIdentificationNumber?: string | null;
  businessDomicile?: string | null;
  businessEmail?: string | null;
  businessPhone?: string | null;
  country?: keyof typeof Pays | null;
  city?: string | null;
  manager?: string | null;
  businessLogo?: string | null;
  businessLogoContentType?: string | null;
  mapLocator?: string | null;
  mapLocatorContentType?: string | null;
}

export type NewEnterprise = Omit<IEnterprise, 'id'> & { id: null };
