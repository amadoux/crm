import { ITask } from 'app/entities/task/task.model';
import { IEmployee } from 'app/entities/employee/employee.model';
import { IJobHistory } from 'app/entities/job-history/job-history.model';

export interface IJob {
  id: number;
  jobTitle?: string | null;
  minSalary?: number | null;
  maxSalary?: number | null;
  tasks?: ITask[] | null;
  employee?: IEmployee | null;
  jobHistory?: IJobHistory | null;
}

export type NewJob = Omit<IJob, 'id'> & { id: null };
