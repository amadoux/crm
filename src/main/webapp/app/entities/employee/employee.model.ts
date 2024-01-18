import dayjs from 'dayjs/esm';
import { IJob } from 'app/entities/job/job.model';
import { IDepartment } from 'app/entities/department/department.model';
import { IJobHistory } from 'app/entities/job-history/job-history.model';
import { Pays } from 'app/entities/enumerations/pays.model';
import { TypeEmployed } from 'app/entities/enumerations/type-employed.model';
import { Level } from 'app/entities/enumerations/level.model';

export interface IEmployee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  identityCard?: string | null;
  dateInspiration?: string | null;
  nationality?: keyof typeof Pays | null;
  uploadIdentityCard?: string | null;
  uploadIdentityCardContentType?: string | null;
  companyName?: string | null;
  typeEmployed?: keyof typeof TypeEmployed | null;
  cityAgency?: string | null;
  residenceCity?: string | null;
  address?: string | null;
  socialSecurityNumber?: string | null;
  birthDate?: dayjs.Dayjs | null;
  birthPlace?: string | null;
  entryDate?: dayjs.Dayjs | null;
  releaseDate?: dayjs.Dayjs | null;
  level?: keyof typeof Level | null;
  hireDate?: dayjs.Dayjs | null;
  salary?: number | null;
  commissionPct?: number | null;
  jobs?: IJob[] | null;
  manager?: IEmployee | null;
  department?: IDepartment | null;
  jobHistory?: IJobHistory | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
