import { IRegion } from 'app/entities/region/region.model';
import { ILocation } from 'app/entities/location/location.model';

export interface ICountry {
  id: number;
  countryName?: string | null;
  region?: IRegion | null;
  location?: ILocation | null;
}

export type NewCountry = Omit<ICountry, 'id'> & { id: null };
