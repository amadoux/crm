import dayjs from 'dayjs/esm';
import { IJob } from 'app/entities/job/job.model';
import { IDepartment } from 'app/entities/department/department.model';
import { IJobHistory } from 'app/entities/job-history/job-history.model';
import { Language } from 'app/entities/enumerations/language.model';

export interface IEmployee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  hireDate?: dayjs.Dayjs | null;
  salary?: number | null;
  commissionPct?: number | null;
  address?: string | null;
  socialSecurityNumber?: string | null;
  birthDate?: dayjs.Dayjs | null;
  nationality?: keyof typeof Language | null;
  uploadIdentityCard?: string | null;
  uploadIdentityCardContentType?: string | null;
  birthPlace?: string | null;
  entryDate?: dayjs.Dayjs | null;
  releaseDate?: dayjs.Dayjs | null;
  jobs?: IJob[] | null;
  manager?: IEmployee | null;
  department?: IDepartment | null;
  jobHistory?: IJobHistory | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
