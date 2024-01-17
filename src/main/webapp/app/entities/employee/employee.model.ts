import dayjs from 'dayjs/esm';
import { IJob } from 'app/entities/job/job.model';
import { IDepartment } from 'app/entities/department/department.model';
import { IJobHistory } from 'app/entities/job-history/job-history.model';
import { Pays } from 'app/entities/enumerations/pays.model';

export interface IEmployee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  hireDate?: dayjs.Dayjs | null;
  salary?: number | null;
  commissionPct?: number | null;
  pays?: keyof typeof Pays | null;
  jobs?: IJob[] | null;
  manager?: IEmployee | null;
  department?: IDepartment | null;
  jobHistory?: IJobHistory | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
