import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IEmployee, NewEmployee } from '../employee.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IEmployee for edit and NewEmployeeFormGroupInput for create.
 */
type EmployeeFormGroupInput = IEmployee | PartialWithRequiredKeyOf<NewEmployee>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IEmployee | NewEmployee> = Omit<T, 'birthDate' | 'entryDate' | 'releaseDate' | 'hireDate'> & {
  birthDate?: string | null;
  entryDate?: string | null;
  releaseDate?: string | null;
  hireDate?: string | null;
};

type EmployeeFormRawValue = FormValueOf<IEmployee>;

type NewEmployeeFormRawValue = FormValueOf<NewEmployee>;

type EmployeeFormDefaults = Pick<NewEmployee, 'id' | 'birthDate' | 'entryDate' | 'releaseDate' | 'hireDate'>;

type EmployeeFormGroupContent = {
  id: FormControl<EmployeeFormRawValue['id'] | NewEmployee['id']>;
  firstName: FormControl<EmployeeFormRawValue['firstName']>;
  lastName: FormControl<EmployeeFormRawValue['lastName']>;
  email: FormControl<EmployeeFormRawValue['email']>;
  phoneNumber: FormControl<EmployeeFormRawValue['phoneNumber']>;
  identityCard: FormControl<EmployeeFormRawValue['identityCard']>;
  dateInspiration: FormControl<EmployeeFormRawValue['dateInspiration']>;
  nationality: FormControl<EmployeeFormRawValue['nationality']>;
  uploadIdentityCard: FormControl<EmployeeFormRawValue['uploadIdentityCard']>;
  uploadIdentityCardContentType: FormControl<EmployeeFormRawValue['uploadIdentityCardContentType']>;
  companyName: FormControl<EmployeeFormRawValue['companyName']>;
  typeEmployed: FormControl<EmployeeFormRawValue['typeEmployed']>;
  cityAgency: FormControl<EmployeeFormRawValue['cityAgency']>;
  residenceCity: FormControl<EmployeeFormRawValue['residenceCity']>;
  address: FormControl<EmployeeFormRawValue['address']>;
  socialSecurityNumber: FormControl<EmployeeFormRawValue['socialSecurityNumber']>;
  birthDate: FormControl<EmployeeFormRawValue['birthDate']>;
  birthPlace: FormControl<EmployeeFormRawValue['birthPlace']>;
  entryDate: FormControl<EmployeeFormRawValue['entryDate']>;
  releaseDate: FormControl<EmployeeFormRawValue['releaseDate']>;
  level: FormControl<EmployeeFormRawValue['level']>;
  hireDate: FormControl<EmployeeFormRawValue['hireDate']>;
  salary: FormControl<EmployeeFormRawValue['salary']>;
  commissionPct: FormControl<EmployeeFormRawValue['commissionPct']>;
  manager: FormControl<EmployeeFormRawValue['manager']>;
  department: FormControl<EmployeeFormRawValue['department']>;
};

export type EmployeeFormGroup = FormGroup<EmployeeFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class EmployeeFormService {
  createEmployeeFormGroup(employee: EmployeeFormGroupInput = { id: null }): EmployeeFormGroup {
    const employeeRawValue = this.convertEmployeeToEmployeeRawValue({
      ...this.getFormDefaults(),
      ...employee,
    });
    return new FormGroup<EmployeeFormGroupContent>({
      id: new FormControl(
        { value: employeeRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      firstName: new FormControl(employeeRawValue.firstName),
      lastName: new FormControl(employeeRawValue.lastName),
      email: new FormControl(employeeRawValue.email, {
        validators: [Validators.required],
      }),
      phoneNumber: new FormControl(employeeRawValue.phoneNumber, {
        validators: [Validators.required],
      }),
      identityCard: new FormControl(employeeRawValue.identityCard, {
        validators: [Validators.required],
      }),
      dateInspiration: new FormControl(employeeRawValue.dateInspiration),
      nationality: new FormControl(employeeRawValue.nationality),
      uploadIdentityCard: new FormControl(employeeRawValue.uploadIdentityCard),
      uploadIdentityCardContentType: new FormControl(employeeRawValue.uploadIdentityCardContentType),
      companyName: new FormControl(employeeRawValue.companyName),
      typeEmployed: new FormControl(employeeRawValue.typeEmployed),
      cityAgency: new FormControl(employeeRawValue.cityAgency),
      residenceCity: new FormControl(employeeRawValue.residenceCity),
      address: new FormControl(employeeRawValue.address),
      socialSecurityNumber: new FormControl(employeeRawValue.socialSecurityNumber),
      birthDate: new FormControl(employeeRawValue.birthDate),
      birthPlace: new FormControl(employeeRawValue.birthPlace),
      entryDate: new FormControl(employeeRawValue.entryDate),
      releaseDate: new FormControl(employeeRawValue.releaseDate),
      level: new FormControl(employeeRawValue.level),
      hireDate: new FormControl(employeeRawValue.hireDate),
      salary: new FormControl(employeeRawValue.salary),
      commissionPct: new FormControl(employeeRawValue.commissionPct),
      manager: new FormControl(employeeRawValue.manager),
      department: new FormControl(employeeRawValue.department),
    });
  }

  getEmployee(form: EmployeeFormGroup): IEmployee | NewEmployee {
    return this.convertEmployeeRawValueToEmployee(form.getRawValue() as EmployeeFormRawValue | NewEmployeeFormRawValue);
  }

  resetForm(form: EmployeeFormGroup, employee: EmployeeFormGroupInput): void {
    const employeeRawValue = this.convertEmployeeToEmployeeRawValue({ ...this.getFormDefaults(), ...employee });
    form.reset(
      {
        ...employeeRawValue,
        id: { value: employeeRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): EmployeeFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      birthDate: currentTime,
      entryDate: currentTime,
      releaseDate: currentTime,
      hireDate: currentTime,
    };
  }

  private convertEmployeeRawValueToEmployee(rawEmployee: EmployeeFormRawValue | NewEmployeeFormRawValue): IEmployee | NewEmployee {
    return {
      ...rawEmployee,
      birthDate: dayjs(rawEmployee.birthDate, DATE_TIME_FORMAT),
      entryDate: dayjs(rawEmployee.entryDate, DATE_TIME_FORMAT),
      releaseDate: dayjs(rawEmployee.releaseDate, DATE_TIME_FORMAT),
      hireDate: dayjs(rawEmployee.hireDate, DATE_TIME_FORMAT),
    };
  }

  private convertEmployeeToEmployeeRawValue(
    employee: IEmployee | (Partial<NewEmployee> & EmployeeFormDefaults),
  ): EmployeeFormRawValue | PartialWithRequiredKeyOf<NewEmployeeFormRawValue> {
    return {
      ...employee,
      birthDate: employee.birthDate ? employee.birthDate.format(DATE_TIME_FORMAT) : undefined,
      entryDate: employee.entryDate ? employee.entryDate.format(DATE_TIME_FORMAT) : undefined,
      releaseDate: employee.releaseDate ? employee.releaseDate.format(DATE_TIME_FORMAT) : undefined,
      hireDate: employee.hireDate ? employee.hireDate.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
