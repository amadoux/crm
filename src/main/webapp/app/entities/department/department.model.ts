import { ILocation } from 'app/entities/location/location.model';
import { IEmployee } from 'app/entities/employee/employee.model';
import { IJobHistory } from 'app/entities/job-history/job-history.model';

export interface IDepartment {
  id: number;
  departmentName?: string | null;
  location?: ILocation | null;
  employees?: IEmployee[] | null;
  jobHistory?: IJobHistory | null;
}

export type NewDepartment = Omit<IDepartment, 'id'> & { id: null };
